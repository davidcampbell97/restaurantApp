exports.reviews = function(req, res) {
    res.send('<h1>Reviews</h1><p>Not yet implemented: will show a lis of reviews.</p>'); 

}


exports.landing_page = function(req, res) {
    res.send('<h1>Welcome to the restaurant application.</h1>');
    }

exports.addReview = function(req, res){
    res.send('<h1>Add a review</h1>');
}

exports.menu = function(req, res){
    res.send('<h1>Our menu</h1>');
}
     