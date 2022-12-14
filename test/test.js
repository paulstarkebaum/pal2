let assert =  require ("assert");
let importFresh = require("import-fresh")
let Phrase =  importFresh("../index.js");

describe("Phrase", function () {
	describe("#palindrome", function () {
		it("should return false for a non-palindrome", function () {
			let nonPalindrome = new Phrase("apple");
			assert(!nonPalindrome.palindrome());
			// arguement of the assert should be true
			// in this case it's true that nonPalndrome is Not a palindrome
		});
		it("should return true for a plain palindrome", function () {
			let plainPalindrome = new Phrase("racecar");
			assert(plainPalindrome.palindrome());
		});
		it("should return true for a mixed case palindrome", function () {
			let mixedCasePalindrome = new Phrase("RaceCar");
			assert(mixedCasePalindrome.palindrome());
		});
		it("should return true for a palindrome with punctuation", function() {
			let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
			assert(punctuatedPalindrome.palindrome());
		});
		it("should return false for an empty string.", function() {
			let emptyString = new Phrase("");
			assert(!emptyString.palindrome());
		})
	});
	describe("#letters", function() {
		it("should return only letters", function() {
			let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
			// assert punctuatedPalindrome.letters() === "MadamImAdam";
			assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
		});
		it("should return '' if no letters", function() {
			let noLetters = new Phrase("1234");
			assert.strictEqual(noLetters.letters(), '');
		})
	});
});