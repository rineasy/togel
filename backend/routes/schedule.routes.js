const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

// Get the complete schedule
router.get('/schedule', async (req, res) => {
  try {
    const scheduleData = await fs.readFile(path.join(__dirname, '../data/schedule.json'), 'utf8');
    const schedule = JSON.parse(scheduleData);
    res.json(schedule);
  } catch (error) {
    console.error('Error reading schedule:', error);
    res.status(500).json({ message: 'Error fetching schedule data' });
  }
});

// Get schedule for a specific market
router.get('/schedule/:marketName', async (req, res) => {
  try {
    const { marketName } = req.params;
    const scheduleData = await fs.readFile(path.join(__dirname, '../data/schedule.json'), 'utf8');
    const schedule = JSON.parse(scheduleData);
    
    const marketSchedule = schedule.schedules.find(s => s.name === marketName);
    if (!marketSchedule) {
      return res.status(404).json({ message: 'Market not found' });
    }
    
    res.json(marketSchedule);
  } catch (error) {
    console.error('Error reading schedule:', error);
    res.status(500).json({ message: 'Error fetching schedule data' });
  }
});

module.exports = router;
