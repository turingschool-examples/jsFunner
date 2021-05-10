const { cities } = require('./datasets/cities');

// DATASET: cities from ./datasets/cities

const cityPrompts = {
  locateWesternCities() {

    // Return an array of the names of the Western cities
    // Hint: Make sure to include south and midwest too!
    // ["denver", "chicago", "houston", "phoenix", "seattle"]
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;
  },

  alphabatizeCities() {

    // Return an array of the names of the cities in alphabetical order
    // ["atlanta", "chicago", "denver", "houston", "louisville", "memphis", "philadelphia", "phoenix", "seattle"];
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;
  },


  listStateAbbreviations() {
    // Return an array of the the state abbreviations
    //["CO", "IL", "GA", "TX", "AZ", "PA", "WA", "TN", "KY"]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;
  }
}



module.exports = {
  cityPrompts
};