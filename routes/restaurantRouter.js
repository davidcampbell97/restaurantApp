const express = require('express');
const router = express.Router();
const controller = require('../Controllers/restaurantController.js')


router.get('/reviews', controller.reviews);

router.get("/", controller.landing_page);

router.get("/addReview", controller.addReview);

router.get('/menu', controller.menu);

 
    router.get('/contactUs', function(req, res){

    res.redirect('/contactUs.html');
        
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
