const { ADMIN_KEY } = process.env;

const verifyAdminKey = (req, res, next) => {
    const adminKey = req.headers["admin_key"]
    if (!adminKey) {
        return res.status(500).json({
            success: false,
            message: "Required admin key"
        })
    }

    if (adminKey !== ADMIN_KEY) {
        return res.status(500).json({
            success: false,
            message: "Invalid admin key"
        })
    }

    next()
}
module.exports = verifyAdminKey