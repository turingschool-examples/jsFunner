const chai = require("chai");
const expect = chai.expect;

const {
  cityPrompts,
  slackChannelPrompts
} = require("../prototypes/index");

describe('PROTOTYPES', () => {
  describe("City Prompts", () => {
    it("locateAllWesternCities", () => {
      const e = cityPrompts.locateAllWesternCities();
      const result = ["denver", "chicago", "houston", "phoenix", "seattle"];

      expect(e).to.deep.equal(result);
    });
    it("alphabatizeCities", () => {
      const e = cityPrompts.alphabatizeCities();
      const result = ["atlanta", "chicago", "denver", "houston", "louisville", "memphis", "philadelphia", "phoenix", "seattle"];

      expect(e).to.deep.equal(result);
    });
    it("listStateAbbreviations", () => {
      const e = cityPrompts.listStateAbbreviations();
      const result = ["CO", "IL", "GA", "TX", "AZ", "PA", "WA", "TN", "KY"];

      expect(e).to.deep.equal(result);
    });
    it("findAttractionsByRegion", () => {
      const e = cityPrompts.listStateAbbreviations('southeast');
      const result =   [{ georgia: ['World of Coca-Cola', 'Georgia Aquarium', 'MODA']}, { tennessee: ['Graceland', 'National Civil Rights Museum', 'Beale Street'] }, { kentucky: ['Louisville Slugger Museum & Factory', 'Churchill Downs', 'Evan Williams Bourbon Experience']}];

      expect(e).to.deep.equal(result);
    });
  });

  describe("Slack Channel Prompts", () => {
    it("findTotalNumberPins", () => {
      const e = slackChannelPrompts.findTotalNumberPins();
      const result = 70;

      expect(e).to.deep.equal(result);
    });
    it("findLeastActiveChannel", () => {
      const e = slackChannelPrompts.findLeastActiveChannel();

      const result = {
        title: '#code-fare',
        isPrivate: false,
        memberCount: 410,
        numPins: 5,
        latestPost: '05/06/21'
      };

      expect(e).to.deep.equal(result);
    });
    it("organizeByPrivacyLevel", () => {
      const e = slackChannelPrompts.organizeByPrivacyLevel();

      const result = {
        privateChannels: ['#instructional-staff', '#turing-jcs', '#staff'],
        publicChannels: [
          '#health-wellness',
          '#unlearning-white-supremacy',
          '#code-fare',
          '#nature-appreciation',
          '#fitness'
        ]
      };

      expect(e).to.deep.equal(result);
    });
    it("findLargestChannel", () => {
      const e = slackChannelPrompts.findLargestChannel();
      const result = 'health-wellness';
      
      expect(e).to.deep.equal(result);
    });
  })
});