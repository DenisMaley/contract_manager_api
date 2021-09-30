/*jshint esversion: 9 */

const contractService = require('../services/contracts');
const sortService = require('./sort');

const getAllContracts = (req, res, next) => {
    let contracts = contractService.getAllContracts();
    // REST API Best practice: Allow filtering, sorting, and pagination
    // TODO: filtering and pagination
    contracts = sortService.sortObjects(contracts, req);

    // REST API Best practice:
    // We return object with list as an attribute to be able to add some other properties later
    // E.g. metadata: {total: total, page: page}
    return res.json({contracts: contracts});
};

module.exports = {
    getAllContracts
};