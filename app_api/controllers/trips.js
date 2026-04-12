const mongoose = require('mongoose');
const Trip = require('../models/travlr');

// GET: /trips → return all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find().exec();

    if (!trips) {
      return res.status(404).json({ message: "No trips found" });
    }

    return res.status(200).json(trips);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const tripsFindByCode = async (req, res) => {
  const q = await Trip.find({ 'code': req.params.tripCode }).exec();

  if (!q || q.length === 0) {
    return res.status(404).json({ "message": "tripCode not found" });
  } else {
    return res.status(200).json(q);
  }
};

module.exports = {
  tripsList,
  tripsFindByCode
};