const express = require('express');
const morgan = require('morgan');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {errors}=require('celebrate');
//const assert = require('assert');
//const cors = require('cors');
//const path = require('path');

const config = require('./config');
//const dbConnection=require('./connection/dbConnection');
const routes = require('./routes');


const app = express();
const url = "mongodb://localhost:27017/assignment";



app.use(morgan('dev'));
//app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


mongoose.connect(url, { useNewUrlParser: true })
    .then(() => {
        console.log('db started sucessfully');

    }).catch((error) => {
        console.log('error', error);
        process.exit(1);
    })

  
//app.use(dbConnection)

app.use('/api', routes);

app.use(errors())

app.use((req, res, next) => {
    res.status(404).json({
        statusCode: 400,
        message: "not found",
        data: data

    })
})


app.listen(config[process.argv[2]].port, () => {
    console.log('server is runnihng at '+config[process.argv[2]].port)
})