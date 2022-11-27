// variables and prototypes
const express = require('express');
const path = require('path');
const app = express();
const port = process.env['PORT'] || 3000;
const fs = require('fs');

// https://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss
String.prototype.toHHMMSS = function() {
    var sec_num = parseInt(this, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
  
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return hours + ':' + minutes + ':' + seconds;
  }

// server
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/allowedWords', (req, res) => {
    var usp = new URLSearchParams(req.query)
    if (usp.has("type") && req.query.split("&").length == 1) {
        if(usp.get("type") == "txt") {
            // res.send(fs.readFileSync('./public/src/allowed_words.txt', 'utf-8'));
            res.sendFile('./public/src/allowed_words.txt', _=>res.send("um; this file doesn't exist??"));
        } else if (usp.get("type") == "json") {
            // res.send(fs.readFileSync('./public/src/allowedWords.json', 'utf-8'));
            res.sendFile('./public/src/allowedWords.json', _=>res.send("um; this file doesn't exist??"));
        } else res.send("uh,, whar?? give me an actual file type?????? 🤓🤡🤓🤡🤓🤡");
    } else res.send("you what? (put \"?type=txt\" or \"?type=json\" at the end of the url)");
});

app.listen(port, () => {
    setInterval(() => {
        console.clear();
        console.log(`Uptime: ${process.uptime().toString().toHHMMSS()}

online!
listening on port: ${port}

frontend:
http://localhost:${port}


replit url (if applicable):`)
        if (process.env.REPL_ID) {
        console.log(`https://${process.env.REPL_SLUG.toLowerCase()}.${process.env.REPL_OWNER.toLowerCase()}.repl.co/`)
        } else console.log(process.env.REPL_ID)
    }, 1000);
});