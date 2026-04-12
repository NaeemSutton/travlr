// Bring in DB connection and Trip schema
const mongoose = require('./db');
const Trip = require('./travlr');

// Read seed data from JSON file
const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// Delete existing data + insert new data
const seedDB = async () => {
  await Trip.deleteMany({});
  await Trip.insertMany(trips);
};

// Run seed + close connection
seedDB().then(async () => {
  await mongoose.connection.close();
  process.exit(0);
});