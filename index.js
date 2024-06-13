//get breed name from command line args
const breedName = process.argv[2];

//require function
const { fetchBreedDescription } = require('./breedFetcher');

//call function
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('error fetch details:', error);
  } else {
    console.log(desc);
  }
});