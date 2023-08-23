const Course = require("../models/createcourse");

const getAllCourses = async(req, res) => {
    try {
        const courses = await Course.find();
        if (!courses) {
            return res.status(400).send({
                responseCode: "96",
                responseMessage: "No course could be fetched",
                data: null
            })
        }
        
        res.status(200).send({
            responseCode: "00",
            responseMessage: "Courses fetched successfully",
            data: courses
        })
    } catch (error) {
        res.status(500).send({
            responseCode: "96",
            responseMessage: "internal server error",
            data: null,
          });
          console.log(error);
    }
}

module.exports.getAllCourses = getAllCourses