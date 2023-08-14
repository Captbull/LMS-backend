const express = require('express')

const courses = require('../controllers/courses.controller')

const courseRouter = express.Router()

courseRouter.post('/createCourse', courses)


module.exports = courseRouter