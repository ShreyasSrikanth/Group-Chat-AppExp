const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require("fs");


router.get('/', (req, res, next) => {
    const fileData = fs.readFileSync("username.txt", "utf-8");

    res.send(`
        <p>${fileData}</p>
        <form id="myForm" action="/message/textData" method="POST">
            <input type="text" id="text" name="text" placeholder="Enter your text">
            <input type="hidden" id="username" name="username">
            <button type="submit">Send</button>
        </form>
        <script>
            document.getElementById('myForm').onsubmit = function() {
                var username = localStorage.getItem('username');
                document.getElementById('username').value = username;
            };
        </script>
    `);
});

router.post('/textData', (req, res, next) => {
    const username = req.body.username;
    const text = req.body.text;
    const data = `${username} : ${text}  .`;

    fs.appendFileSync("username.txt", data);
    res.redirect('/message/');
});

module.exports = router;
