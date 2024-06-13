const needle = require("needle");

//function to fetch breed description
const fetchBreedDescription = function(breedName, callback) {

  //api endpoint url
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  //make http request 

  needle.get(url, (error, response, body) => {
  //check if there is an error and display error message
    if (error) {
      callback(error, null);
      return;
    }

    //check if body is an array
    //access first entry in data array
    if (Array.isArray(body) && body.length > 0) {
      const breed = body[0];
      callback(null, breed.description);
    } else {
    //log breed not found if no breed with that name exists
      callback('Breed not found', null);
    }
  
  });
  
};

module.exports = { fetchBreedDescription };
