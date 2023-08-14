const mongoose = require("mongoose") 
const courses = require("../controllers/courses.controller")


const coursesSchema = new mongoose.Schema( {
    name: { type: String }
})


const Courses = mongoose.model("courses", coursesSchema)


module.exports = Courses