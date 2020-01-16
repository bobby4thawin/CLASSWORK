const express = require('express');

const router = express.Router(); //Pastal Case

router.get('/', (req,res) => {
    res.send('I can make a web server yippeeeee!');
});

router.get('/classes', (req,res) => {
    res.send('Hello career classes');
});

module.exports = router; //18:58

