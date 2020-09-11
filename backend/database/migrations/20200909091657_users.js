exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('first_name', 100).notNullable();
        table.string('last_name', 100).notNullable();
        table.string('email', 255).notNullable().unique();
        table.string('phone', 50).nullable();
        table.string('password', 255).notNullable();
        table.bigInteger('created_at').notNullable().defaultTo(knex.raw('getCurrentUnixTimestamp() * 1000'));
        table.bigInteger('updated_at').nullable();
        table.bigInteger('deleted_at').nullable();
    })
}

exports.down = function(knex, Promise) {
}