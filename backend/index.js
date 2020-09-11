#!/usr/bin/env node

'use strict'
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const {runMigrations, runSeed} =require('./database/connection/connection');

app.use(express.json());
app.disable('x-powered-by')
runMigrations().then(r => {
    console.log('database migrate successfully');
});
runSeed().then(r=>{})

app.use('/api/v1',[require('./router/user.route')]);

app.listen(PORT, () => {
    console.log(`Server started on port ${ PORT }`)
}).on('error', err => {
    console.log('ERROR: ', err)
})