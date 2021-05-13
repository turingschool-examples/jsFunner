const { cities } = require('./datasets/cities');
const { slackChannels } = require('./datasets/slackChannels');
const { trainers, exercisers } = require('./datasets/fitnessCenter');


// DATASET: cities from ./datasets/cities
const cityPrompts = {
  locateAllWesternCities() {

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

    // Return all of the top attractions for a given region 

    // Passing in 'southeast' should return 
    // [
    //   { georgia: ['World of Coca-Cola', 'Georgia Aquarium', 'MODA'] },
    //   { Tennessee: ['Graceland', 'National Civil Rights Museum', 'Beale Street'] },
    //   { Kentucky: ['Louisville Slugger Museum & Factory', 'Churchill Downs', 'Evan Williams Bourbon Experience'] }
    // ]
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------



// DATASET: slackChannels from ./datasets/slackChannels
const slackChannelPrompts = {
  findTotalNumberPins() {
  // Return the total number of pinned posts across the Slack community
  // Return -> 70

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;
  },

  findLeastActiveChannel() {
    // Return the channel with the oldest post. 
    // Return -> {
    //   title: '#code-fare',
    //   isPrivate: false,
    //   memberCount: 410,
    //   numPins: 5,
    //   latestPost: '05/06/21'
    // }
    // Hint: Think about how you will need to format the dates for this! 

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

  },

  organizeByPrivacyLevel() {
    // Return the slack channels organized by privacy level. 
  //   Return -> {
  //     privateChannels: ['#instructional-staff', '#turing-jcs', '#staff'],
  //     publicChannels: [
  //         '#health-wellness',
  //         '#unlearning-white-supremacy',
  //         '#code-fare',
  //         '#nature-appreciation',
  //         '#fitness'
  //       ]}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;
  },

  findLargestChannel() {
    // Return the name of the largest Slack channel. Remember to parse out the octothorpe!
    // Return -> 'health-wellness'

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


const fitnessCenterPrompts = {
  findTrainerInBudget(currentExerciser) {
  // Return a list of trainers that are in a given exerciser's budget. Make sure you handle a scenario where an exerciser does not have enough money for a trainer.

    // Passing in 'Ron' should return -> ['Tammy', 'Jean-Ralphio', 'Bobby Newport']
    // Passing in 'Andy' should return -> 'Sorry, no trainers available at this rate!
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;
  },

  findTrainerForInterest(exerciser) {
    // Return the first trainer that specializes in all of an exerciser's interest areas. For example, Mark is interested in both 'yoga' and 'cardio' so he would like a trainer that can teach both. 
    // Passing in 'Mark' should return 'Bobby Newport'
    // Passing in 'Jerry' should return 'Donna'
    
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;
  }
};

module.exports = {
  cityPrompts,
  slackChannelPrompts,
  fitnessCenterPrompts
};