const knex = require('knex');
const getConnection = async () => {
    let knexConnection;
    if (!knexConnection) {
        knexConnection = knex({
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
                directory: __dirname + '/../migrations',
                loadExtensions: ['.js']
            },
            seeds: {
                directory: __dirname + '/../seeds',
                loadExtensions: ['.js']
            },
        });
    }
    return knexConnection;
}

const runMigrations = async () =>{
    return (await getConnection()).migrate.latest();
}

const runSeed= async ()=>{
    return (await getConnection()).seed.run();
}

module.exports = { getConnection, runMigrations, runSeed }