const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const jwt = require('jsonwebtoken');

const functions = require('../function');

const register = require('../models/register');
const validator = require('../validator/userValidator');
const services = require('../services/userServices');


//registration
router.post('/register', validator.registerValidator, (req, res) => {
    services.userRegister(req, res);
})

//login

router.post('/login', validator.loginValidator, (req, res) => {
    services.userLogin(req, res);

})

//token

router.get('/', (req, res, next) => {
    console.log('111111')
    let token = req.headers.authorization.split(' ')[1];
    console.log(token);
    jwt.verify(token, 's3cr3t', (err, decoded) => {
        console.log('22')
        if (err) {
            console.log(err)
            throw error;
        }
        console.log(decoded);
    })
    return res.json({
        statusCode: 200,
        message: "hello",
        data: token
    });
})


//update user

router.put('/update/:id', (req, res) => {
    services.userUpdate(req, res);
})


//delete user

router.delete('/delete', (req, res) => {
    services.userDelete(req, res);
})

//get data

router.get('/get', (req, res) => {
    services.userGet(req, res);
})

module.exports = router;