const jwt = require('jsonwebtoken');
const privateKey = '___WATCH___ZONE___'
exports.generateToken = async user =>{
   return await jwt.sign((user),privateKey,{ expiresIn: "7d" });
}

exports.verifyToken = async token =>{
    return await jwt.verify(token, privateKey);
}