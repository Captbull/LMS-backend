const Courses = require("../models/createcourse");
const User = require("../models/user")


const getCourseDetails = async (req, res) => {
    try {
        const course = await Courses.findOne({ _id: req.body._id });
        if(!course) return res.status(404).send({
            responseCode: "90",
            responseMessage: "Course not found",
            data: null
        })
        res.status(200).send({
            responseCode: "00",
            responseMessage: "Successful",
            data: {
                _id: course._id,
                image: course.courseImage,
                title: course.title,
                description: course.description,
                learningObjectives: course.learningObjectives,
                duration: course.duration
            }
        })
    } catch (error) {
        res.status(500).send({
            responseCode: '96',
            responseMessage: 'internal server error',
            data: null

        })

        console.log(error);
    }
}






module.exports = getCourseDetails