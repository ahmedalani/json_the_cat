/* eslint-disable */
const request = require('request');

const breedName = process.argv[2];

request(`https://ai.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, res, body) => {
  if (err) {
    return console.log(err);
  }
  const data = JSON.parse(body);
  if (!data[0]) {
    return console.log('breed name invalid or not found');
  }
  console.log(data[0].description);
});
