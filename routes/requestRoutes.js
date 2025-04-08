const { Router } = require('express')
const router = Router()
const { handleSendRequest, getAllRequests, getRequest } = require('../controllers/userRequest.controller')
const verifyAdminKey = require('../middleware/isAdmin')

router.post('/user/request', verifyAdminKey, handleSendRequest)
router.get('/user/requests', verifyAdminKey, getAllRequests)
router.get('/user/request/:phone_number', verifyAdminKey, getRequest)

module.exports = router