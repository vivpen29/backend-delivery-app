const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// API routes
app.get('/meals', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'meals.json');
  fs.readFile(filePath, 'utf8', (err, meals) => {
    if (err) {
      console.error('Error reading meals.json:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(JSON.parse(meals));
    }
  });
});

// Add other routes here as needed
app.get('/offers', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'offers.json');
  fs.readFile(filePath, 'utf8', (err, offers) => {
    if (err) {
      console.error('Error reading offers.json:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(JSON.parse(offers));
    }
  });
});

// Root route
app.get('/', (req, res) => {
  res.send('Delivery app backend is up and running!');
});

// Export for Vercel
module.exports = app;