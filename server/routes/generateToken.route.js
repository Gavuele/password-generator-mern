const express = require('express')
const { generateToken } = require('../controllers/generateToken.controller')

const router = express.Router()

router.get('/generate-token', generateToken)

module.exports = router