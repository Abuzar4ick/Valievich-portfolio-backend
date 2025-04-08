const { ADMINNAME, PASSWORD, ADMIN_KEY } = process.env

// Router: /admin/register
// Method: POST
// Description: Admin registration, to get special key
exports.register = async (req, res) => {
    try {
        const { admin_name, password } = req.body
        if (admin_name !== ADMINNAME || password !== PASSWORD) {
            return res.status(400).json({
                success: false, 
                message: "Incorrect admin name or password"
            })
        }
        res.status(200).json({
            success: true,
            special_key: ADMIN_KEY
        })
    } catch(err) {
        console.error(`Error: ${err.message}`)
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}