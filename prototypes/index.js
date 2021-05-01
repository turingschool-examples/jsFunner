const { cities } = require('./datasets/cities');

// DATASET: cities from ./datasets/cities

const cityPrompts = {
  alphabatizeCities() {
    let cityNames = Object.keys(cities)
    return cityNames.sort();
  },
}



module.exports = {
  cityPrompts
};