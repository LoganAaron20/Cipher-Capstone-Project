const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("invalid values", () => {
  it("Should return false if the shift value is equal to 0", () => {
    let actual = caesar("input", 0, true);
    expect(actual).to.equal(false);
  });
  it("should return false if the shift value is below -25", () => {
    let actual = caesar("input", -26, true);
    expect(actual).to.equal(false);
  });
  it("should return false if the shift value is above 25", () => {
    let actual = caesar("input, 26, true");
    expect(actual).to.equal(false);
  });
  it("should return false if the shift value is not present", () => {
    let actual = caesar("input");

    expect(actual).to.equal(false);
  });
});

describe("Ignoring elements in Caesar", () => {
  it("should ignore capital letters", () => {
    let actual = caesar("INPUT", 13, true);
    let expected = "vachg";
    expect(actual).to.equal(expected);
  });
});

describe("going off the alphabet", () => {
  it("should wrap around to the front of the alphabet", () => {
    let actual = caesar("z", 2, true);
    let expected = "b";
    expect(actual).to.equal(expected);
  });
  it("should wrap around to the back of the alphabet", () => {
    let actual = caesar("a", -2, true);
    let expected = "y";
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces and other nonalphabetic symbols in the message", () => {
    let actual = caesar("a b[", 10, true);
    let expected = "k l[e";
    expect(actual).to.equal(expected);
  });
});
