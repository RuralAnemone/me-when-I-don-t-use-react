const express = require('express');
const path = require('path');
const app = express();
const port = process.env['PORT'] || 3000;
const fs = require('fs');

// server
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/allowedWords', (req, res) => {
    var usp = new URLSearchParams(req.query)
    if (usp.has("type") && req.query.split("&").length == 1) {
        if(usp.get("type") == "txt") {
            res.send(fs.readFileSync('./public/src/allowed_words.txt', 'utf-8'));
        } else if (usp.get("type") == "json") {
            res.send(fs.readFileSync('./public/src/allowedWords.json', 'utf-8'));
        } else res.send("uh,, whar?? give me an actual file type?????? 🤓🤡🤓🤡🤓🤡");
    } else res.send("you what? (put \"?type=txt\" or \"?type=json\" at the end of the url)");
});

app.listen(port);