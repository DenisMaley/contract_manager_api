/*jshint esversion: 9 */

const express = require("express");
const routes = require('./routes/contracts');
const port = 3000;

const app = express();

// REST API Best practice: Accept and respond with JSON
app.use(express.json());
app.use('/', routes); //to use the routes

const listener = app.listen(process.env.PORT || port, () => {
    console.log('App is listening on port ' + listener.address().port);
});