/*jshint esversion: 9 */

// Here should be calls to a real DB
// Really don't like the mock with JSON
const fs = require('fs');
const filedDB = require('./file_db');

let rawdata = fs.readFileSync(filedDB.file_path);
let data = JSON.parse(rawdata);

const save = (data) => {
  fs.writeFileSync(
    filedDB.file_path,
    JSON.stringify({contracts: data}, null, 2),
    (error) => {
      if (error) {
        throw error;
      }
    }
  );
};

const getAllContracts = () => {
    // dummy function for now
    return data.contracts;
};

const getContractById = (id) => {
    // dummy function for now
    return data.contracts.filter( contract =>  contract.id == id)[0];
};

module.exports = {
    getAllContracts,
    getContractById,
    save
};