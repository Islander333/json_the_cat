const needle = require("needle");

//get breed name from command line args
const breedName = process.argv[2];

//api endpoint url
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

//function to fetch breed description
const getDescription = () => {
//make http request 
  needle.get(url, (error, response, body) => {
  //check if there is an error and display error message
    if (error) {
      console.error('error:', error);
      return;
    }
    //get body content
    console.log('body:', body);
    console.log('type of body:', typeof body);

    //check if body is an array
    //access first entry in data array
    if (Array.isArray(body) && body.length > 0) {
      const breed = body[0];
      console.log('breed description:', breed.description);
    } else {
    //log breed not found if no breed with that name exists
      console.log('Breed not found');
    }
  
  });
  
};

getDescription(breedName);

