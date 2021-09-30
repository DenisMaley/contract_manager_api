/*jshint esversion: 9 */

const express = require('express');
const router  = express.Router();


const contractController = require('../controllers/contracts');

// REST API Best practice: Use nouns instead of verbs in endpoint paths
// The action should be indicated by the HTTP request method that we’re making.
// The most common methods include GET, POST, PUT, and DELETE.
router.get('/contracts', contractController.getAllContracts);

router.get('/contracts/:id', contractController.getContract);
router.put('/contracts/:id', contractController.editContract);

module.exports = router; // export to use in server.js