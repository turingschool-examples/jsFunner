const chai = require("chai");
const expect = chai.expect;

const {
  cityPrompts,
  slackChannelPrompts,
  fitnessCenterPrompts
} = require("../prototypes/index");

describe('PROTOTYPES', () => {
  describe("City Prompts", () => {
    it.skip("locateAllWesternCities", () => {
      const e = cityPrompts.locateAllWesternCities();
      const result = ["denver", "chicago", "houston", "phoenix", "seattle"];

      expect(e).to.deep.equal(result);
    });
    it.skip("alphabatizeCities", () => {
      const e = cityPrompts.alphabatizeCities();
      const result = ["atlanta", "chicago", "denver", "houston", "louisville", "memphis", "philadelphia", "phoenix", "seattle"];

      expect(e).to.deep.equal(result);
    });
    it.skip("listStateAbbreviations", () => {
      const e = cityPrompts.listStateAbbreviations();
      const result = ["CO", "IL", "GA", "TX", "AZ", "PA", "WA", "TN", "KY"];

      expect(e).to.deep.equal(result);
    });
    it.skip("findAttractionsByRegion", () => {
      const e = cityPrompts.findAttractionsByRegion("southeast");
      const result = [{
        georgia: ["World of Coca-Cola", "Georgia Aquarium", "MODA"]
      }, {
        tennessee: ["Graceland", "National Civil Rights Museum", "Beale Street"]
        }, {
        kentucky: ["Louisville Slugger Museum & Factory", "Churchill Downs", "Evan Williams Bourbon Experience"]}];

      expect(e).to.deep.equal(result);
    });
  });

  describe("Slack Channel Prompts", () => {
    it.skip("findTotalNumberPins", () => {
      const e = slackChannelPrompts.findTotalNumberPins();
      const result = 70;

      expect(e).to.deep.equal(result);
    });
    it.skip("findLeastActiveChannel", () => {
      const e = slackChannelPrompts.findLeastActiveChannel();

      const result = {
        title: "#code-fare",
        isPrivate: false,
        memberCount: 410,
        numPins: 5,
        latestPost: "05/06/21"
      };

      expect(e).to.deep.equal(result);
    });
    it.skip("organizeByPrivacyLevel", () => {
      const e = slackChannelPrompts.organizeByPrivacyLevel();

      const result = {
        privateChannels: ["#instructional-staff", "#turing-jcs", "#staff"],
        publicChannels: [
          "#health-wellness",
          "#unlearning-white-supremacy",
          "#code-fare",
          "#nature-appreciation",
          "#fitness"
        ]
      };

      expect(e).to.deep.equal(result);
    });
    it.skip("findLargestChannel", () => {
      const e = slackChannelPrompts.findLargestChannel();
      const result = "health-wellness";
      
      expect(e).to.deep.equal(result);
    });
  });

  describe('Fitness Center Prompts', () => {
    it.skip("findTrainerInBudget Ron", () => {
      const e = fitnessCenterPrompts.findTrainerInBudget("Ron");
      const result = ["Tammy", "Jean-Ralphio", "Bobby Newport"];

     expect(e).to.deep.equal(result);
   });

    it.skip("findTrainerInBudget Andy", () => {
      const e = fitnessCenterPrompts.findTrainerInBudget("Andy");
      const result = "Sorry, no trainers available at this rate!";

      expect(e).to.deep.equal(result);
    });

    it.skip("findTrainerForInterest Mark", () => {
      const e = fitnessCenterPrompts.findTrainerForInterest("Mark");
      const result = "Bobby Newport";

      expect(e).to.deep.equal(result);
    });

    it.skip("findTrainerForInterest Jerry", () => {
      const e = fitnessCenterPrompts.findTrainerForInterest("Mark");
      const result = "Donna";

      expect(e).to.deep.equal(result);
    });

    it.skip("organizeTrainersBySpecialty", () => {
      const e = fitnessCenterPrompts.organizeTrainersBySpecialty();
      const result = {
        strength: ['Tammy', 'Donna', 'Mona-Lisa', 'Bobby Newport'],
        cardio: ['Tammy', 'Bobby Newport'],
        yoga: ['Chris', 'Jean-Ralphio', 'Donna', 'Mona-Lisa', 'Bobby Newport'],
        meditation: ['Chris', 'Mona-Lisa'],
        recovery: ['Chris', 'Donna'],
        pilates: ['Jean-Ralphio', 'Mona-Lisa', 'Bobby Newport']
      };

      expect(e).to.deep.equal(result);
    });
  })
});