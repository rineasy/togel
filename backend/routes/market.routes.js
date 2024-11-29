const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

// Get all markets from schedule.json
router.get('/markets', async (req, res) => {
  try {
    const scheduleData = await fs.readFile(path.join(__dirname, '../data/schedule.json'), 'utf8');
    const markets = JSON.parse(scheduleData);
    res.json(markets);
  } catch (error) {
    console.error('Error reading markets:', error);
    res.status(500).json({ message: 'Error fetching markets' });
  }
});

module.exports = router;
