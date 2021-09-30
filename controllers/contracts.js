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

const getContract = (req, res, next) => {
    const contract = contractService.getContractById(req.params.id);
    if(!contract) {
        // REST API Best practice: return proper status codes
        return res.status(404).json({message: "Contract not found."});
    }
    return res.json({contract: contract});
};

const editContract = (req, res, next) => {
    const contract = contractService.getContractById(req.params.id);
    if(!contract) {
        return res.status(404).json({message: "Contract not found."});
    }
    const edited_contract = {
      ...contract,
      ...req.body,
    };

    let contracts = contractService.getAllContracts();
    contracts = contracts.map((item) => {
        if (item.id === edited_contract.id) {
            return edited_contract;
        } else {
            return item;
        }
    });
    contractService.save(contracts);
    //All this logic should be in the service if we'd use a real DB

    return res.json({contract: edited_contract});
};

module.exports = {
    getAllContracts,
    getContract,
    editContract
};