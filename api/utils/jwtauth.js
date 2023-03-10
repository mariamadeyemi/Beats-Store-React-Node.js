const jwt = require("jsonwebtoken")

const generateToken = (user) =>{
    return jwt.sign(
        {
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email_address
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "30d",
        }
    )
}

module.exports = generateToken;