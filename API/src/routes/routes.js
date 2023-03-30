const express = require('express');
const router = express.Router();

const {register} = require('../controller/doctor.controller')

router.post('/doctor/register', register);

module.exports = router;