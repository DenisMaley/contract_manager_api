/*jshint esversion: 9 */

// Here should be calls to a real DB
const fs = require('fs');
const path = require('path');
const file_path = path.resolve(__dirname, '../db_mock.json');

let rawdata = fs.readFileSync(file_path);
let data = JSON.parse(rawdata);

const getAllContracts = () => {
    // dummy function for now
    return data.contracts;
};

module.exports = {
    getAllContracts
};