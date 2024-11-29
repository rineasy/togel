const mongoose = require('mongoose');

const drawSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Result: {
    type: String,
    required: true
  },
  Tanggal: {
    type: String,
    required: true
  },
  Time: {
    type: String,
    required: true
  },
  Top4D: {
    type: String,
    required: true
  },
  Top3D: {
    type: String,
    required: true
  },
  Top2D: {
    type: String,
    required: true
  },
  Colok: {
    type: String,
    required: true
  },
  Colok2D: {
    type: String,
    required: true
  },
  Shio: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Draw', drawSchema);
