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
  const q = await Trip.find({ code: req.params.tripCode }).exec();

  if (!q || q.length === 0) {
    return res.status(404).json({ message: "tripCode not found" });
  } else {
    return res.status(200).json(q);
  }
};

const tripsAddTrip = async (req, res) => {
  try {
    const trip = await Trip.create({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });

    return res.status(201).json(trip);
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip
};