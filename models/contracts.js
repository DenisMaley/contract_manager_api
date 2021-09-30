/*jshint esversion: 9 */

const mongoose = require("mongoose");

const ContractSchema = new mongoose.Schema({
    total: Number,
    currency_code: {type:String, required:true},
    payment_type: {
        type: String,
        enum : ['full', 'partial']
    },
    payment_timing: {
        type: String,
        enum : ['begin', 'end']
    },
    payment_period: {
        type: String,
        enum : ['yearly', 'monthly', 'weekly', 'quarterly'],
        default: 'yearly'
    },
    payment_amount: Number,
    payment_currency_code: String,
    auto_renew: Boolean,
    cancel_early: Boolean,
    description: String,
    endDate: Date,
    beginDate: Date,
    duration: Number,
    duration_type: {
        type: String,
        enum : ['years', 'months', 'days']
    },
    status: {
        type: String,
        enum : ['draft', 'not-active', 'active', 'expired', 'terminated']
    }
});

const Contract = mongoose.model('Conract', ContractSchema); //convert to model named Contract
module.exports = Contract; //export for controller use