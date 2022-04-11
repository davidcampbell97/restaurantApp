const express = require('express');
const app = express();
const nedb = require('nedb');
const db = new nedb({filename: 'restaurant.db', autoload: true});
const router = ('./Controllers/restaurantRouter.js');
app.use('/', router);




console.log('db created');