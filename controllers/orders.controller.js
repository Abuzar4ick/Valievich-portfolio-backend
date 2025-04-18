const { createOrder, getOrders, getOrderByPhone, deleteOrderByPhone } = require('../services/orders.service')

// Router: /orders
// Method: POST
// Description: For users to contact the admin
exports.handleSendOrder = async (req, res) => {
    try {
        const data = await createOrder(req.body)
        if (data.success === false) {
            return res.status(400).json({ success: false, message: "This user already post a request." })
        }
        res.status(201).json({ success: true, data })
    } catch(err) {
        console.error(`Error: ${err.message}`)
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

// Router: /orders
// Method: GET
// Description: Get all requests
exports.getAllOrders = async (req, res) => {
    try {
        const data = await getOrders()
        res.status(200).json({ success: true, data })
    } catch(err) {
        console.error(`Error: ${err.message}`)
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

// Router: /orders/phone_number
// Method: GET
// Description: Get request by phone_number of user
exports.getOneOrder = async (req, res) => {
    try {
        const { phone_number } = req.params
        const data = await getOrderByPhone(phone_number)
        res.status(200).json({ success: true, data })
    } catch(err) {
        console.error(`Error: ${err.message}`)
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

// Router: /orders/:phone_number
// Method: DELETE
// Description: Delete order by id
exports.deleteOrderByPhone = async (req, res) => {
    try {
        const { phone_number } = req.params
        const data = await deleteOrderByPhone(phone_number)
        if (data.success === false) {
            return res.status(400).json({ success: false, message: "This user already post a request." })
        }
    } catch(err) {
        console.error(`Error: ${err.message}`)
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}