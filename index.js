// This is our npm module, it's in pal2/index.js, it exports the Phrase object
// the module is called pstark-pal2 which is in the package.json in the pal2 folder.
// when we call this locallay we have go to the project root directory repos/pal2
// and let Phrase =  require("./index.js")
// that is we assign the exported Phrase from index to a new Phrase object
// to find and replace> copy selection to replace, select to find, control K D to skip and select next
// control D to select next, paste. ctrl U if you select too many. 

module.exports = Phrase;
console.log('hello 4!');

// Adds .reverse method to all strings.
String.prototype.reverse = function () {
	return Array.from(this).reverse().join("");
}

// Defines a Phrase object which contains .palindrome method,
function Phrase(content) {	
	this.content = content;

	this.letters = function letters() {
		// let theLetters = [];
		// const letterRegex = /[a-z]/i;
		// Array.from(this.content).forEach(function(character) {
		// 	if (character.match(letterRegex)) {
		// 		theLetters.push(character);
		// 	}
		// });
		// return theLetters.join("");
		// return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
		const lettersRegEx = /[a-z]/gi;
		return(this.content.match(lettersRegEx) || []).join("");
		// return(this.content.match(/[a-z]/gi)).join("");

	}

	this.processedContent = function processedContent() {
		if (this.letters().toLowerCase().length < 1) {
			return false;
		} else {
			return this.letters().toLowerCase();
		}
	}

	this.palindrome = function palindrome() {
		// console.log(`${this.processedContent()} = ${this.processedContent().reverse()}`)
		console.log(`import fresh`);
		if (this.processedContent()) {
			return this.processedContent() === this.processedContent().reverse();			
		} else {
			return false;
		}

	}
}
