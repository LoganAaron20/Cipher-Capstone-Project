// when encoding, it translates the letters i and j to 42
//when decoding, it translates 42 to (i/j)
//it ignores capital letters
//it maintains spaces in the message, before and after encoding and decoding

const polybiusModule = require("../src/polybius");
const expect = require("chai").expect;

describe("Polybius Function - LaBronn", () => {
  describe("Error Handling", () => {
    it("should return false if the length of all numbers are odd.", () => {
      const message = "2345 235134341122514";
      const actual = polybiusModule.polybius(message, false);
      expect(actual).to.equal(false);
    });
  });
  describe("Encoding Handling", () => {
    it("should correctly translate a given string to numbers.", () => {
      const actual = polybiusModule.polybius("Thoughtful", true);
      const expected = "44324354223244125413";
      expect(actual).to.equal(expected);
    });
    it("when encoding it translates the letters i and j to 42 ", () => {
      const actual = polybiusModule.polybius(
        "You cant hide what is inside",
        true
      );
      const expected = "454354 31113344 32424151 25321144 4234 423334424151";
      expect(actual).to.equal(expected);
    });
    it("Should maintain spaces in the string", () => {
      const actual = polybiusModule.polybius(
        "I have spaces for days, yeah",
        true
      );
      const expected = "42 32111551 345311315134 124324 41114534, 45511132";
      expect(actual).to.equal(expected);
    });
    it("Should ignore capital letters", () => {
      const actual = polybiusModule.polybius("camelCase or PascalCase?", true);
      const expected = "311123511331113451 4324 53113431111331113451?";
      expect(actual).to.equal(expected);
    });
  });
  describe("Decoding Handling", () => {
    it("should correctly translate a given numbers to words.", () => {
      const actual = polybiusModule.polybius("44324354223244125413", false);
      const expected = "thoughtful";
      expect(actual).to.equal(expected);
    });
    it("Should translate 42 to (i/j) ", () => {
      const message =
        "4432512451 4234 23432451 4443 13421251 44321133 2351514434 443251 514551";
      const actual = polybiusModule.polybius(message, false);

      const expected = "there (i/j)s more to l(i/j)fe than meets the eye";
      expect(actual).to.equal(expected);
    });
    it("Should maintain spaces in the string", () => {
      const actual = polybiusModule.polybius(
        "42 32111551 345311315134 124324 41114534 45511132",
        false
      );
      const expected = "(i/j) have spaces for days yeah";
      expect(actual).to.equal(expected);
    });
  });
});
