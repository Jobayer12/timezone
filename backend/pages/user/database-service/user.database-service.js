const knexnest = require('knexnest');
const {getConnection} = require('../../../database/connection/connection')

exports.loadUser =async searchClause=>{
    const knex  = await getConnection();
    return  knexnest(knex.select([
        'u.id as _id',
        'u.first_name as _firstName',
        'u.last_name as _lastname',
        'u.email as _email',
        'u.phone as _phone'
    ]).from('users as u').where(searchClause).orderBy('u.id', 'desc')).then(user=>{
        return user;
    });
}

exports.createLocalUser= async user =>{
    const knex = await getConnection();
    return knex.insert(user,['id']).into('users')
}

exports.loginUser = async searchClause =>{
    const knex = await getConnection();
    return  knexnest(knex.select([
        'u.id as _id',
        'u.first_name as _firstName',
        'u.last_name as _lastname',
        'u.email as _email',
        'u.phone as _phone',
        'u.password as _password'
    ]).from('users as u').where(searchClause)).then(user=>{
        return user;
    });
}