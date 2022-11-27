const fs = require('fs');
const { createInterface } = require('readline/promises');
const { stdin, stdout } = require('process');
const rl = createInterface({stdin,stdout});


const allowedWords = fs.readFileSync('./allowedWords.json', 'utf-8');

async function prompt(q) {
    const answer = await rl.question(q);
    return answer;
    // rl.close()
}

console.log(`aa ${prompt("e??????")}`)