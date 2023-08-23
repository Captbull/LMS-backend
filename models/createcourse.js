const mongoose = require('mongoose')


const createCourseSchema = new mongoose.Schema({
    courseImage: {
        type: String
    },
    title: {
        type: String,
        required: "Course Title is needed."
    },
    description:{
        type: String
    },
    learningObjectives: {
        type: String,
    }, 
    duration: {
        type: String,
    },
    dateCreated: {
        type: String,
    },
    createdBy: {
        type: String
    },
    dateUpdated: {
        type: String,
    },
    updatedBy: {
        type: String,
    }

})

const Course = mongoose.model("Course", createCourseSchema) 

module.exports = Course