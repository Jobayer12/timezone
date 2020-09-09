#!/usr/bin/env node

'use strict'
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const {runMigrations, runSeed} =require('./database/connection/connection');

app.use(express.json());
runMigrations().then(r => {
    console.log('database migrate successfully');
});
runSeed().then(r=>{})


app.get('', (req,res)=>{
    res.send('hello world');
})

app.listen(PORT, () => {
    console.log(`Server started on port ${ PORT }`)
}).on('error', err => {
    console.log('ERROR: ', err)
})