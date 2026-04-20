const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

router.route('/trips')
  .get(tripsController.tripsList)
  .post(tripsController.tripsAddTrip);

router.get('/trips/:tripCode', tripsController.tripsFindByCode);

module.exports = router;