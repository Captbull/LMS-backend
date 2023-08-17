/*
step 1 - validate client request body using joi library
*/
const Course = require("../models/createcourses");
const joi = require("joi");
const { RoleType } = require("../utilities/constant");
​
const createCourse = async (req, res) => {
  const schema = joi.object({
    courseImage: joi.string().required(),
    title: joi.string().required(),
    description: joi.string().required(),
    learningObjectives: joi.string().required(),
    duration: joi.number().required(),
  });
​
  const { error } = schema.validate(req.body);
  if (error)
    return res.status(400).send({
      responseCode: "96",
      responseMessage: error.details[0].message,
      data: null,
    });
​
  if (req.user.role !== RoleType.INSTRUCTOR) {
    return res.status(401).send({
      responseCode: "80",
      responseMessage: "Unauthorized",
      data: null,
    });
  }
  const { courseImage, title, description, learningObjectives, duration } =
    req.body;
​
  try {
    let course = await Course.findOne({ title });
​
    if (course)
      return res.status(400).send({
        responseCode: "96",
        responseMessage: "Course already exist",
        data: null,
      });
​
    course = new Course({
      courseImage,
      title,
      description,
      learningObjectives,
      duration,
      dateCreated: new Date().toJSON(),
      createdBy: req.user.email,
      dateUpdated: null,
      updatedBy: null,
    });
​
    await course.save();
    res.status(200).send({
      responseCode: "00",
      responseMessage: "course creation successful",
      data: course,
    });
  } catch (error) {
    res.status(500).send({
      responseCode: "96",
      responseMessage: "internal server error",
      data: null,
    });
    console.log(error);
  }
};
​
module.exports = createCourse;