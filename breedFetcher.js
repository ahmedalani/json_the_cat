/* eslint-disable */
const request = require('request');

const breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
  const data = JSON.parse(body);

  console.log('The description is: ', data[0].description);
  // console.log('Body!!!: ', JSON.parse(body));
  // console.log('Typeof Body!!!: ', typeof JSON.parse(body));
});
