const express = require('express')

const registration = require('../controllers/registration.controller')
const auth = require('../middleware/auth')
const getUserProfile = require('../controllers/getUserProfile.controller')

const userRouter = express.Router()

userRouter.post('/registration', registration)
userRouter.get("/getUserProfile", auth, getUserProfile)


module.exports = userRouter