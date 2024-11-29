const fs = require('fs').promises;
const path = require('path');
const schedule = require('node-schedule');
const Draw = require('../models/Draw');
const { generateDraw } = require('../utils/drawGenerator');

class DrawService {
  constructor() {
    this.schedules = [];
  }

  async init() {
    try {
      console.log('Initializing draw service...');
      const scheduleFilePath = path.join(__dirname, '../data/schedule.json');
      console.log('Reading schedule from:', scheduleFilePath);
      
      const scheduleData = await fs.readFile(scheduleFilePath, 'utf8');
      console.log('Schedule data read successfully');
      
      const { schedules } = JSON.parse(scheduleData);
      console.log(`Found ${schedules.length} market schedules`);
      
      this.schedules = schedules;
      this.setupSchedules();
      console.log('Draw service initialized successfully');
    } catch (error) {
      console.error('Error initializing draw service:', error);
    }
  }

  setupSchedules() {
    console.log('Setting up schedules...');
    this.schedules.forEach(market => {
      market.times.forEach(time => {
        // Parse time in format "HH:mm:ss"
        const [hours, minutes, seconds] = time.split(':').map(Number);
        
        console.log(`Scheduling draw for ${market.realName} at ${time}`);
        
        // Schedule job
        const job = schedule.scheduleJob({ hour: hours, minute: minutes, second: seconds }, async () => {
          try {
            // Check if it's the right day for the market
            if (this.isMarketDay(market.frequency)) {
              console.log(`Creating draw for ${market.realName} at ${new Date().toISOString()}`);
              await this.createDraw(market.realName, time);
            }
          } catch (error) {
            console.error(`Error creating draw for ${market.realName}:`, error);
          }
        });
      });
    });
    console.log('All schedules have been set up');
  }

  isMarketDay(frequency) {
    if (frequency === 'Daily') return true;

    const today = new Date().toLocaleString('en-US', { weekday: 'short' });
    const days = frequency.split(', ').map(day => day.substring(0, 3));
    return days.includes(today);
  }

  async createDraw(marketName, drawTime) {
    try {
      const drawData = generateDraw(marketName, drawTime);
      const draw = new Draw(drawData);
      await draw.save();
      console.log(`Created new draw for ${marketName}:`, drawData);
      return draw;
    } catch (error) {
      console.error(`Error creating draw for ${marketName}:`, error);
      throw error;
    }
  }

  async getLatestDraws() {
    try {
      return await Draw.find()
        .sort({ createdAt: -1 })
        .limit(10);
    } catch (error) {
      console.error('Error getting latest draws:', error);
      throw error;
    }
  }

  async getDrawHistory(marketName, limit = 30) {
    try {
      return await Draw.find({ Name: marketName })
        .sort({ createdAt: -1 })
        .limit(limit);
    } catch (error) {
      console.error(`Error getting draw history for ${marketName}:`, error);
      throw error;
    }
  }
}

module.exports = new DrawService();
