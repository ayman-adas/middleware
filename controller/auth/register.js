const users = require('../../modules/auth/users')
const user = require('../../modules/auth/userInfo')
const registerFunction = (req, res) => {
    if (res) {
        const {username, email, pass,address, contact, role } = req.body
        users.push(
           new user(username, email,pass,address, contact, role),

        )
        res.send('sucsess')
    }
}
module.exports = registerFunction