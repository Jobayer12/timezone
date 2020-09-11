
exports.up = function(knex) {
    return knex('users').insert({
        first_name: 'Jobayer',
        last_name: 'Ahmed',
        email: 'Jobayer@gmail.com',
        phone: '',
        password: '$2a$10$F.hvYaKK1DnPLauHvk8/Ae15r81ZBN8TWc8GXIDtyPu3CGQ5xZ12a'
    }, ['id']);
};

exports.down = function(knex) {
  
};
