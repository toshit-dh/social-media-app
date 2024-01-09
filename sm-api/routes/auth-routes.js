const { register } = require('../controllers/auth-controllers')
const router = require('express').Router()
router.post('/')
router.post('/register',register)
module.exports = router