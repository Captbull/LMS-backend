const getAllCourses = require("../controllers/getAllCourses.controller")

const auth = require("../middleware/auth")



getAllCourses.get("getAllCourses", auth, getAllCourses)