const { cities } = require('./datasets/cities');

// DATASET: cities from ./datasets/cities

const cityPrompts = {
  locateAnyWesternCities() {

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
  },

  findAttractionsByRegion(region) {

    // Return an array of objects for locations that are in the passed in region. This should include the matching attractions. 

    // Passing in 'southeast' should return 
    // [
    //   { georgia: ['World of Coca-Cola', 'Georgia Aquarium', 'MODA'] },
    //   { Tennessee: ['Graceland', 'National Civil Rights Museum', 'Beale Street'] },
    //   { Kentucky: ['Louisville Slugger Museum & Factory', 'Churchill Downs', 'Evan Williams Bourbon Experience'] }
    // ]
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;
  
  }
}



module.exports = {
  cityPrompts
};