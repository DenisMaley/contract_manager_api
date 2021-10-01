/*jshint esversion: 9 */

const express = require("express");
const routes = require('./routes/contracts');
const port = 3000;

const app = express();

// REST API Best practice: Accept and respond with JSON
app.use(express.json());
app.use('/', routes); //to use the routes

const swaggerUi = require('swagger-ui-express'), swaggerDocument = require('./swagger.json');

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

// middleware to catch non-existing routes
app.use((req, res, next) => {
    res.status(404).json({message: "Path not found."});
});

// middleware to catch errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    // REST API Best practice: We do want to see the error but we don't want
    // to let a user see it, so just "Something went wrong"
    res.status(500).json({error: "Something went wrong"});
});

const listener = app.listen(process.env.PORT || port, () => {
    console.log('App is listening on port ' + listener.address().port);
});