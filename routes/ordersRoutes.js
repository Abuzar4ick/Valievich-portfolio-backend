const { Router } = require('express')
const router = Router()
const { handleSendOrder, getAllOrders, getOneOrder, deleteOrderByPhone } = require('../controllers/orders.controller')
const verifyAdminKey = require('../middleware/isAdmin')

router.post('/orders', verifyAdminKey, handleSendOrder)
router.get('/orders', verifyAdminKey, getAllOrders)
router.get('/orders/:phone_number', verifyAdminKey, getOneOrder)
router.delete('/orders/:phone_number', verifyAdminKey, deleteOrderByPhone)

module.exports = router