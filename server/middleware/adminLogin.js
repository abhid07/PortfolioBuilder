const User = require('../model/UserModel')

const adminLogin = async (req, res, next) => {
    try {
        // Get user information by id
        const user = await User.findOne({
            _id: req.loggeduser._id
        })
        if (user.role === "user")
            return res.status(400).json({ msg: "Admin resources access denied" })
            console.log(user.role)
        next()

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

module.exports = adminLogin