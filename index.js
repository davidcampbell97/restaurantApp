const express = require('express');
const app = express();
const nedb = require('nedb');
const db = new nedb({filename: 'restaurant.db', autoload: true});
const router = require('./Controllers/restaurantRouter');



app.use('/', router);




app.listen(3000, () => {
    console.log('Server started on port 3000. Ctrl^c to quit.'); })

console.log('db created');