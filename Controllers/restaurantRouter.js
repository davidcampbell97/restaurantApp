const express = require('express');
const router = express.Router();


router.get('/', function(req, res){

res.send('Hello test and welcome to the restaurant application');

})


router.use(function(req, res){

    res.status(404);
    res.type('text/plain');
  res.send('404 not found');
})


router.use(function(err, req, res, next) 
{ res.status(500); 
    res.type('text/plain'); 
    res.send('Internal Server Error.');
})

module.exports = router;
