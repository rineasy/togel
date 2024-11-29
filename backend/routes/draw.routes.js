const express = require('express');
const router = express.Router();
const drawService = require('../services/drawService');

// Get latest draws
router.get('/latest', async (req, res) => {
  try {
    const draws = await drawService.getLatestDraws();
    res.json(draws);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching latest draws', error: error.message });
  }
});

// Get draw history for a specific market
router.get('/history/:marketName', async (req, res) => {
  try {
    const draws = await drawService.getDrawHistory(req.params.marketName);
    res.json(draws);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching draw history', error: error.message });
  }
});

module.exports = router;
