const chai = require("chai");
const expect = chai.expect;

const {
  cityPrompts
} = require("../prototypes/index");


describe('PROTOTYPES', () => {
  describe("City Prompts", () => {
    it("locateWesternCities", () => {
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
  });
});