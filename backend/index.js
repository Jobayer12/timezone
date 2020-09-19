#!/usr/bin/env node

'use strict'
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const {runMigrations, runSeed} =require('./database/connection/connection');
const swaggerUi = require('swagger-ui-express'),

swaggerDocument = require('./swagger.json');

app.use(express.json());
app.disable('x-powered-by')
runMigrations().then(r => {
    console.log('database migrate successfully');
});
runSeed().then(r=>{})

app.use('/api/v1',[require('./router/user.route')]);
const options = {
    swaggerOptions: {
        authAction :{ JWT: {name: "JWT", schema: {type: "apiKey", in: "header", name: "Authorization", description: ""}, value: "Bearer <JWT>"} }
    }
};
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

app.listen(PORT, () => {
    console.log(`Server started on port ${ PORT }`)
}).on('error', err => {
    console.log('ERROR: ', err)
})