const chai = require("chai");
const expect = chai.expect;

const {
  cityPrompts
} = require("../prototypes/index");


describe('PROTOTYPES', () => {
  describe("City Prompts", () => {
    it("locateAnyWesternCities", () => {
      const e = cityPrompts.locateWesternCities();
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
      const result =   [
       { georgia: ['World of Coca-Cola', 'Georgia Aquarium', 'MODA'] },
       { Tennessee: ['Graceland', 'National Civil Rights Museum', 'Beale Street'] },
       { Kentucky: ['Louisville Slugger Museum & Factory', 'Churchill Downs', 'Evan Williams Bourbon Experience'] }
     ];
      expect(e).to.deep.equal(result);
    });
  });
});