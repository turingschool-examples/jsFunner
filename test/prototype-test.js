const chai = require("chai");
const expect = chai.expect;

const {
  cityPrompts
} = require("../prototypes/index");


describe('PROTOTYPES', () => {
  describe("City Prompts", () => {
    it("alphabatizeCities", () => {
      const e = cityPrompts.alphabatizeCities();
      const result = ["atlanta", "chicago", "denver", "houston", "louisville", "memphis", "philadelphia", "phoenix", "seattle"];

      expect(e).to.deep.equal(result)
    });
  });
});