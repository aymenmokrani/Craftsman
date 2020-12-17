const jwt = require('jsonwebtoken')

const requireAuth = (req, res, next) => {

    const token = req.cookies.jwt

    if (token) {
        jwt.verify(token, 'craftsman token secret', (err, decodedToken) => {
            if (err) {
                console.log(err);
                res.send(false)
            } else {
                console.log(decodedToken);
                next()
            }
        })
    } else {
        res.send(false)
    }
}

module.exports = { requireAuth }