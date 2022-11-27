const fs = require('fs');
const { createInterface } = require('readline/promises');
const rl = createInterface(process.stdin, process.stdout);


const allowedWords = fs.readFileSync('./allowedWords.json', 'utf-8');
String.prototype.removeStr = function(stringToRemove) {
    return this.includes(stringToRemove) ? this.split(stringToRemove).join("") : this.toString();
}
var guesses, regex = ["mrjocktvquizphdbagsfewlynx","mrjocktvquizphdbagsfewlynx","mrjocktvquizphdbagsfewlynx","mrjocktvquizphdbagsfewlynx","mrjocktvquizphdbagsfewlynx"];

for (guesses = 6; guesses > 0; guesses--) {
    rl.question(`\nguess a word; you have ${guesses} left:\n`, async word => {
        await filter(word);
    });
    rl.close();
}

async function filter(word) {
    console.log("uh", word, guesses);
}