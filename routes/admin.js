const express = require("express");
const router = express.Router();
const fs = require("fs");



router.get('/login', (req, res, next) => {
    
    res.send(`
        <form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/mes" method="POST">
            <input type="text" id="username" name="username" placeholder="Enter your username">
            <button type="submit">Send</button>
        </form>
       `);
});

router.post("/mes", (req, res, next) => {
    
    const username = req.body.username;
    req.app.locals.username = username;

    res.redirect('/message/')
});

module.exports = router;
