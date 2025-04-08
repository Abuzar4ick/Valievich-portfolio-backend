const { Router } = require('express')
const router = Router()
const { handleSendOrder, getAllOrders, getOrderByPhone } = require('../controllers/orders.controller')
const verifyAdminKey = require('../middleware/isAdmin')

router.post('/orders', verifyAdminKey, handleSendOrder)
router.get('/orders', verifyAdminKey, getAllOrders)
router.get('/orders/:phone_number', verifyAdminKey, getOrderByPhone)

module.exports = router