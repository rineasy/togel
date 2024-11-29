const config = require('./config');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const drawRoutes = require('./routes/draw.routes');
const marketRoutes = require('./routes/market.routes');
const scheduleRoutes = require('./routes/schedule.routes');
const drawService = require('./services/drawService');
const generateSitemap = require('./utils/sitemapGenerator');

const app = express();
const PORT = config.port;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/draws', drawRoutes);
app.use('/api/markets', marketRoutes);
app.use('/api', scheduleRoutes);

// Serve sitemap.xml
app.get('/sitemap.xml', async (req, res) => {
  try {
    const hostname = process.env.NODE_ENV === 'production' 
      ? 'https://yourdomain.com'  // Replace with your actual domain
      : `http://localhost:${PORT}`;
    
    const sitemap = await generateSitemap(hostname);
    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
  } catch (error) {
    console.error('Sitemap generation error:', error);
    res.status(500).end();
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    status: 'error',
    message: err.message || 'Internal Server Error'
  });
});

// MongoDB Connection
async function startServer() {
  try {
    await mongoose.connect(config.mongodb.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

    // Initialize draw service
    await drawService.init();
    console.log('Draw service initialized');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log('Environment:', config.env);
      console.log('MongoDB URI:', config.mongodb.uri);
    });

  } catch (error) {
    console.error('Could not connect to MongoDB:', error);
    process.exit(1);
  }
}

startServer();
