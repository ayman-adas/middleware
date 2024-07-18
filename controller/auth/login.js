users = require('../../modules/auth/users')
const jwt = require("jsonwebtoken");

const loginFunction = (req, res) => {
    if (res) {


        const { username, pass } = req.body

       i=1
        for (const user of users) {
             i++
            if (username == user.username && pass == user.pass) {
                console.log(`Username: ${user.username}, pass: ${user.pass}`);
                const payload = {
                    userId: user.username,
                    role:user.role
                };
                const options = { expiresIn: "20h" };
                const secret = process.env.SECRET_KEY;
                const token = jwt.sign(payload, secret, options);
                if (token) {

                    res.status(200).json({
                        messgge:"sucess",
                        result:token
                    })
                }
                else { res.send('failed') }
            }
        }
             if(i==users.length)    {
                res.send('failed')
             }    
 
    } else { res.send('failed') }

}
module.exports = loginFunction