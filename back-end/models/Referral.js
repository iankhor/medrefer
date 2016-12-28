const mongooose = require('mongoose')
const db = require('./_init')

const referralSchema = new mongooose.Schema({
    patient_first_name: String,
    patient_last_name: String,
    patient_referral_medical_condition: String,
    doctor_first_name: String,
    doctor_last_name: String,
    doctor_address: String,
    doctor_provider_number : Number,
    doctor_signature: String,
    created_at: { type: Date, default: Date.now }
})

const Referral = mongooose.model('Referral', referralSchema)

module.exports = Referral
