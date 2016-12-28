const mongooose = require('mongoose')
const db = require('./_init')

const referralSchema = new mongooose.Schema({
    first_name: String,
    last_name: String,
    created_at: { type: Date, default: Date.now }

})

const Referral = mongooose.model('Referral', referralSchema)

module.exports = Referral
