const joi = require("joi")
const bcrypt = require("bcrypt")
const User = require("../models/user")
const Courses =require("../models/courses")

const registration = async (req, res) => {
    const schema = joi.object({
        firstName: joi.string().min(3).required(),
        lastName: joi.string().min(3).required(),
        email: joi.string().min(3).required().email(),
        password: joi.string().required().min(8),
        courses: joi.required()
    })

    const { error } = schema.validate(req.body)

    if (error) return res.status(400).send({
        responseCode: '95',
        responseMessage: error.details[0].message,
        data: null
    })


    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).send({
                responseCode: '95',
                responseMessage: 'email already exist',
                data: null
            })

        }
        const { firstName, lastName, email, password, courses } = req.body

        user = new User({
            firstName, lastName, email, password, courses, dateCreated: new Date().toJSON()
        })
        // hash passwrd using bcrypt
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        
        await user.save()

        res.status(200).send({
            responseCode: '00',
            responseMessage: 'Registeration successfull Sign in to proceeed',
            data: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                dateCreated: user.dateCreated,
                courses: user.courses,
                role: user.role
            }
        })
    }
    catch (error) {
        res.status(500).send({
            responseCode: '96',
            responseMessage: 'internal server error',
            data: null

        })

        console.log(error);

    }
}






module.exports = registration