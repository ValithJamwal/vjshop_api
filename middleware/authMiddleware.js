const jwt = require('jsonwebtoken')

const authMiddleware = (req , res , next) => {

    const token = req.header('Authorization');

    if(!token) {
        return res.status(401).json({message: 'No Token'});
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decode.user;
    } catch (error) {
        res.status(401).json({message : 'Token Invalid'})
    }

}

module.exports = authMiddleware;