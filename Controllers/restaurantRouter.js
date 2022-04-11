const express = require('express');
const router = express.Router();


router.get('/', function(req, res){

res.send('Hello and welcome to the restaurant application');

})


router.use(function(req, res){

    res.status(404);
    res.type('text/plain');
    res.send('404 not found');
})

module.exports = router;
