/* eslint-disable */
const request = require('request');

function fetchBreedDescription(breedName, cb) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, res, body) => {
    if (err) {
      return cb(err);
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      let err = 'breed name invalid or not found'
      return cb(err);
    }
    cb(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };