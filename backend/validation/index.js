const validator = require('validator');

exports.userValidation = user => {
    if (!validator.default.isEmail(user.email)) throw new Error("Not valid Email");
    if (!validator.default.isLength(user.password, {min: 5})) throw new Error("Not valid password");
    if (!validator.default.isLength(user.first_name, {min: 3})) throw new Error("Firstname is too short. Atleast 3 character required");
    if (!validator.default.isLength(user.last_name, {min: 3})) throw new Error("Lastname is too short. Atleast 3 character required");
    if(user.phone){
        if(!validator.default.isLength(user.phone,{min: 11})) throw new Error('Not valid phone number');
        if(!validator.default.isNumeric(user.phone)) throw new Error('Not valid phone number');
    }
}