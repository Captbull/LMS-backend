const joi = require("joi")

const Courses = require("../models/courses")


const courses = async (req, res) => {
    const schema = joi.object({
        name: joi.string().min(3).required()

    })
    const { error } = schema.validate(req.body)

    if (error) return res.status(400).send({
        responseCode: '95',
        responseMessage: error.details[0].message,
        data: null
    })

    try {
        let user = await courses.findOne({ name: req.body.name })
        if (user) {
            return res.status(400).send({
                responseCode: '95',
                responseMessage: 'course already exist',
                data: null
            })

        }
        const { firstName, lastName, email, password, courses } = req.body

        user = new Courses({
            firstName, lastName, email, password, courses, dateCreated: new Date().toJSON()
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



 module.exports = courses