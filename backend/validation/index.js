const validator = require('validator');

exports.userValidation = user => {
    if(user.email)
        if (!validator.default.isEmail(user.email)) throw new Error("Not valid Email");
    if(user.password)
        if (!validator.default.isLength(user.password, {min: 5})) throw new Error("Password length atleast 6 character.");
    if(user.first_name)
         if (!validator.default.isLength(user.first_name, {min: 3})) throw new Error("Firstname is too short. Atleast 3 character required");
    if(user.last_name)
        if (!validator.default.isLength(user.last_name, {min: 3})) throw new Error("Lastname is too short. Atleast 3 character required");
    if(user.phone){
        if(!validator.default.isLength(user.phone,{min: 11})) throw new Error('Not valid phone number');
        if(!validator.default.isNumeric(user.phone)) throw new Error('Not valid phone number');
    }
}