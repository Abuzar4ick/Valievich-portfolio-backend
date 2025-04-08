const { Router } = require('express')
const router = Router()
const { register } = require('../controllers/register.controller')

router.post('/admin/register', register)

module.exports = router