const mongoose = require('mongoose')

const coursesSchema = new mongoose.Schema( {
    name: { type: String }
})


const userSchema = new mongoose.Schema({
    firstName: { type: String, minlength: 3, required: 'first name is required' },
    lastName: { type: String, minlength: 3, required: 'last name is required' },
    email: { type: String, minlength: 3, required: 'email is required' },
    password: { type: String, minlength: 8, required: 'password is required' },
    dateCreated: { type: String, default: new Date().toJSON() },
    courses: [coursesSchema]
})


const User = mongoose.model("user", userSchema)


module.exports = User