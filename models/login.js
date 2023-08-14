const mongoose = require('mongoose')


const loginSchema = new mongoose.Schema({
    email: { type: String, minlength: 3, required: 'email is required' },
    password: { type: String, minlength: 8, required: 'password is required' },
})


const Login = mongoose.model("login", loginSchema)


module.exports = Login