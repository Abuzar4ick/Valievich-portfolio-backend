const { createRequest, getRequests, getRequestByPhone } = require('../services/userRequest.service')

// Router: /user/request
// Method: POST
// Description: For users to contact the admin
exports.handleSendRequest = async (req, res) => {
    try {
        const data = await createRequest(req.body)
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

// Router: /user/requests
// Method: GET
// Description: Get all requests
exports.getAllRequests = async (req, res) => {
    try {
        const data = await getRequests()
        res.status(200).json({ success: true, data })
    } catch(err) {
        console.error(`Error: ${err.message}`)
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

// Router: /user/requests/phone_number
// Method: GET
// Description: Get request by phone_number of user
exports.getRequest = async (req, res) => {
    try {
        const { phone_number } = req.params
        const data = await getRequestByPhone(phone_number)
        res.status(200).json({ success: true, data })
    } catch(err) {
        console.error(`Error: ${err.message}`)
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}