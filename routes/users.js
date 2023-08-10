const express = require('express')

const registration = require('../controllers/registration.controller')

const userRouter = express.Router()

userRouter.post('/registration', registration)


module.exports = userRouter