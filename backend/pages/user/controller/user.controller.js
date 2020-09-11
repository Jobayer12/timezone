const {getAllUsers, createUser, localUserLogin} = require('../service/user.service');

const getAllUser = async (req, res)=>{
    const response = {data: null, message: null, statusCode: 200}
    response.data = await getAllUsers();
    return  res.send(response);
}

const createLocalUser = async (req, res)=>{
    const response = {data: null, message: null, statusCode: 200}
    try {
        response.data = await createUser(req.body);

    }catch (e) {
        response.statusCode = 400;
        response.message = e.message;
    }
    return res.status(response.statusCode).json(response);
}

const login = async (req,res)=>{
    const response = {data: null, message: '', statusCode: 200}
    try{
        response.data = await localUserLogin(req.body);
    }catch (event) {
        response.statusCode = 400;
        response.message = event.message;
    }
    return res.status(response.statusCode).json(response);
}

module.exports={getAllUser, createLocalUser, login};