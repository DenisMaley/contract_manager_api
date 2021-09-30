const express = require("express"); // import express
const routes = require('../../routes/contracts'); //import file we are testing
const request = require("supertest"); // supertest is a framework that allows to easily test web apis


jest.mock("../../db_mock.json", () => {
            contracts: [
                {
                    id: 1,
                    total: 1001,
                    currency_code: "EUR"
                },
                {
                    id: 2,
                    total: 1002,
                    currency_code: "USD"
                },
                {
                    id: 3,
                    total: 1003,
                    currency_code: "CAD"
                },
                {
                    id: 4,
                    total: 1004,
                    currency_code: "AUD"
                }
            ]
        }
); //callback function with mock data

const app = express();

// REST API Best practice: Accept and respond with JSON
app.use(express.json());
app.use('/', routes); //to use the routes

//TODO Unit tests
//TODO The rest of the endpoints.
describe("testing-routes", () => {
    it("GET /contracts - success", async () => {
        const { body } = await request(app).get("/contracts"); //use the request function that we can use the app
        // save the response to body variable
        expect(body).toEqual({
            contracts: [
                {
                    id: 1,
                    total: 1001,
                    currency_code: "EUR"
                },
                {
                    id: 2,
                    total: 1002,
                    currency_code: "USD"
                },
                {
                    id: 3,
                    total: 1003,
                    currency_code: "CAD"
                },
                {
                    id: 4,
                    total: 1004,
                    currency_code: "AUD"
                }
            ]
        });
    });
});