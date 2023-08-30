const User = require("../models/user");

const getUserProfile = async (req, res) => {
    try {
        const user = await User.findOne({_id: req.user._id});
        if(!user) return res.status(404).send({
            responseCode: "90",
            responseMessage: "User not found",
            data: null
        })
        res.status(200).send({
            responseCode: "00",
            responseMessage: "Successful",
            data: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                courses: user.courses,
                role: user.role,
                dateCreated: user.dateCreated
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






module.exports = getUserProfile