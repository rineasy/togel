require('dotenv').config();

const config = {
  port: process.env.PORT || 5000,
  mongodb: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/prediksi'
  },
  env: process.env.NODE_ENV || 'development'
};

module.exports = config;
