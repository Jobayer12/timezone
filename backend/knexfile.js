'use strict'
module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            port: 5432,
            database: 'watchzone',
            user: 'watchzone',
            password: 'watchzone'
        },
        pool: {
            min: 10,
            max: 30,
            idleTimeoutMillis: 60000,
        },
        acquireConnectionTimeout: 20000,
        migrations: {
            tableName: 'migrations',
            directory: __dirname + '/database/migrations',
            loadExtensions: ['.js']
        },
        seeds: {
            directory: __dirname + './database/seeds',
            loadExtensions: ['.js']
        },
    },
    staging: {
        client: 'pg',
        connection: {
            host: 'localhost',
            port: 5432,
            database: 'watchzone',
            user: 'watchzone',
            password: 'watchzone'
        },
        pool: {
            min: 10,
            max: 30,
            idleTimeoutMillis: 60000,
        },
        acquireConnectionTimeout: 20000,
        migrations: {
            tableName: 'migrations',
            directory: __dirname + '/database/migrations',
            loadExtensions: ['.js']
        },
        seeds: {
            directory: __dirname + './database/seeds',
            loadExtensions: ['.js']
        },
    },
    production: {
        client: 'pg',
        connection: {
            host: 'localhost',
            port: 5432,
            database: 'watchzone',
            user: 'watchzone',
            password: 'watchzone'
        },
        pool: {
            min: 10,
            max: 30,
            idleTimeoutMillis: 60000,
        },
        acquireConnectionTimeout: 20000,
        migrations: {
            tableName: 'migrations',
            directory: __dirname + '/database/migrations',
            loadExtensions: ['.js']
        },
        seeds: {
            directory: __dirname + './database/seeds',
            loadExtensions: ['.js']
        },
    }
}