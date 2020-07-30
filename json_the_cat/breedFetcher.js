const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  request("https://api.thecatapi.com/v1/breeds/search?name="+breedName, (error,response,body) => {
    const data = JSON.parse(body);
    if(data.length === 0) {
      return callback('invalid input', null)
    }
    if(error) {
      return callback(error, null)
    }
    const description = data[0].description
    if(description) {
      return callback(null, description)
    }
 })
};


module.exports = { fetchBreedDescription };