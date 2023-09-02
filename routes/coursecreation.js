const express = require('express')

const auth = require("../middleware/auth")

const createcourse = require('../controllers/createcourse.controller')
const getCourseDetails = require ('../controllers/getCourseDetails.controller')


const createCourseRouter = express.Router()


createCourseRouter.put('/coursecreation', auth, createcourse)

createCourseRouter.get("/getCourseDetails", getCourseDetails)



module.exports = createCourseRouter