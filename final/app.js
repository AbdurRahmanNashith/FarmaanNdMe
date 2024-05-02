const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

// MongoDB connection URI
const uri = 'mongodb://localhost:3000';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');

  // Set up routes
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
