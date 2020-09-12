const bcrypt = require('bcryptjs');
const {loadUser, createLocalUser, loginUser} = require('../database-service/user.database-service')
const {userValidation} = require('../../../validation');
const {generateToken} = require('../../../JWT');

const getAllUsers =async ()=>{
    return await loadUser({'u.deleted_at': null});
}
const createUser = async user =>{
    const createUserDataValidation = await userValidation(user);

    const checkUserExistsOrNot = await loadUser({'u.deleted_at':null, 'u.email': user.email.toLowerCase()});
    if(checkUserExistsOrNot
        &&
        checkUserExistsOrNot[0].email.toLowerCase() === user.email.toLowerCase()
        &&
        checkUserExistsOrNot.length > 0)
    {
       throw new Error('email already exists');
    }


    user.password =  bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
    return await createLocalUser(user);
}


const localUserLogin = async user =>{
    const createUserDataValidation = await userValidation(user);
    const userData = await loginUser({'u.deleted_at':null, 'u.email': user.email.toLowerCase()});

    if(userData
        &&
        userData[0].email.toLowerCase() === user.email.toLowerCase()
        &&
        bcrypt.compareSync(user.password, userData[0].password))
    {
        delete userData[0].password;
        return {
            accessToken: await generateToken(userData[0])
        }
    }
    throw  new Error('Invalid auth credentials');
}

module.exports={getAllUsers, createUser, localUserLogin};