const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require("fs");


router.get('/', (req, res, next) => {
    const fileData = fs.readFileSync("username.txt", "utf-8");

    res.send(`
        <p>${fileData}</pre>
        <form  action="/message/textData" method="POST">
            <input type="text" id="text" name="text" placeholder="Enter your username">
            <button type="submit">Send</button>
        </form>
    `);
});

router.post('/textData', (req,res,next)=>{
    const username = req.app.locals.username;
    const text = req.body.text;
    console.log(username);
    const data = `${username} : ${text}  .`;
    fs.appendFileSync("username.txt", data)

    res.redirect('/message/')
})


module.exports = router;
