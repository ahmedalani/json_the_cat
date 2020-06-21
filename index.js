/* eslint-disable */
const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (err, desc) => {
  if (err) {
    return console.log(err)
  }
  console.log(desc);
});