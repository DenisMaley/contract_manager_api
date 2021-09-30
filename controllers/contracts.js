/*jshint esversion: 9 */

const contractService = require('../services/contracts');

const getAllContracts = (req, res, next) => {
    const contracts = contractService.getAllContracts();

    // REST API Best practice:
    // We return object with list as an attribute to be able to add some other properties later
    // E.g. metadata: {total: total, page: page}
    return res.json({contracts: contracts});
};

module.exports = {
    getAllContracts
};