// var fs = require('fs');
// var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const tripsEndpoint = 'http://localhost:3000/api/trips';

const options = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
};

/* GET travel view */
const travel = async (req, res) => {
  try {
    const response = await fetch(tripsEndpoint, options);
    const trips = await response.json();

    let message = null;

    if (!Array.isArray(trips)) {
      message = 'API lookup error';
    } else {
      if (!trips.length) {
        message = 'no trips exist in our database';
      }
    }

    res.render('travel', {
      title: 'Travlr Getaways',
      trips: trips,
      message
    });

  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = {
  travel
};