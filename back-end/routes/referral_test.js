var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    patient_first_name: 'John',
    patient_last_name: 'Doe',
    patient_referral_medical_condition: 'Psycosis',
    doctor_first_name: 'Greg',
    doctor_last_name: 'Sam',
    doctor_address: 'Badminton Connect',
    doctor_provider_number : '123456',
    doctor_signature: 'JPEG Link',
  })
});

module.exports = router;
