const fs = require('fs');
const { createInterface } = require('readline/promises');
const rl = createInterface(process.stdin, process.stdout);


const allowedWords = fs.readFileSync('./allowedWords.json', 'utf-8');
String.prototype.removeStr = function(stringToRemove) {
    return this.includes(stringToRemove) ? this.split(stringToRemove).join("") : this.toString();
}
var guesses, guess, regex = ["mrjocktvquizphdbagsfewlynx","mrjocktvquizphdbagsfewlynx","mrjocktvquizphdbagsfewlynx","mrjocktvquizphdbagsfewlynx","mrjocktvquizphdbagsfewlynx"];

for (guesses = 6; guesses > 0; guesses--) {
    // rl.question(`\nguess a word; you have ${guesses} left:\n`, word => {filter(word)});
    filter("")
}

function filter(word) {
    console.log("asdfghjkl".removeStr('jk'))
}

