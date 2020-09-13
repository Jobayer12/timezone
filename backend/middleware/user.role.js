'use strict'
const jwtUtility = require('../JWT/index');
exports.userLoginTokenVerified = async (req, res, next) => {
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
            const token = req.headers.authorization.split(' ').reverse()[0];
            const verifyToken = await jwtUtility.verifyToken(token)
            if (verifyToken.id) {
                req.loggedInUserInfo = verifyToken;
                next();
            }
        } else {
            return res.status(404).json({
                statusCode: 404,
                message: 'Invalid token',
                data: null
            })
        }
    } catch (e) {
        return res.status(404).json({
            statusCode: 404,
            message: e.message,
            data: null
        })
    }
}