const joi = require("joi")
const bcrypt = require("bcrypt")
const Login = require("../models/login")
const { createToken } = require("../utilities/createToken");
const { ResponseCode } = require("../utilities/responseCode");
const User = require("../models/user")

const login = async (request, response) => {
    const schema =  joi.object({
        email: joi.string().min(3).required().email(),
        password: joi.string().required().min(8)
    })
    console.log(request.body?.email);

    const { error } = schema.validate(request.body)

    if (error) return response.status(400).send({
        responseCode: '95',
        responseMessage: error.details[0].message,
        data: null
    })

    try {
        let user = await User.findOne({ email: request.body.email });
        if (!user)
          return response.status(400).send({
            responseCode: "ResponseCode.BAD_REQUEST",
            responseMessage: "Invalid email or password",
            data: null,
          });
        const validatePassword = await bcrypt.compare(
          request.body.password,
          user.password
        );
        if (!validatePassword)
          return response.status(400).send({
            responseCode: "",
            responseMessage: "Invalid email or password",
            data: null,
          });
          
        const token = createToken(user)
        response.status(200).send({
          responseCode: "55",
          responseMessage: "Login successful",
          data: {
            _id: user._id,
            email: user.email,
            username: user.username,
            role: user.role,
            // isVerified: user.isVerified,
            dateCreated: user.dateCreated,
            // profileImage: user.profileImage,
            token,
          },
        });
      } catch (error) {
        response.status(500).send({
          responseCode: "52",
          responseMessage: "Internal server error",
          data: null,
        });
        console.log(error.message);
      }

};

module.exports = login

    // try {
    //     let user = await user.findOne({ email: request.body.email });
    //     if (!user)
    //       return response.status(400).send({
    //         responseCode: ResponseCode.BAD_REQUEST,
    //         responseMessage: "Invalid email or password",
    //         data: null,
    //       });
    //     const validatePassword = await bcrypt.compare(
    //       request.body.password,
    //       user.password
    //     );
    //     if (!validatePassword)
    //       return response.status(400).send({
    //         responseCode: ResponseCode.BAD_REQUEST,
    //         responseMessage: "Invalid email or password",
    //         data: null,
    //       });
    //     //   if(!user.isVerified) return response.send({
    //     //     responseCode: ResponseCode.SUCCESSFUL,
    //     //     responseMessage: "Kindly verify your account to proceed",
    //     //     data: {
    //     //       _id: user._id,
    //     //       email: user.email,
    //     //       username: user.username,
    //     //       isVerified: user.isVerified,
    //     //       dateCreated: user.dateCreated,
    //     //     },
    //     //   });
    //     const token = createToken(user)
    //     response.status(200).send({
    //       responseCode: ResponseCode.SUCCESSFUL,
    //       responseMessage: "Login successful",
    //       data: {
    //         _id: user._id,
    //         email: user.email,
    //         username: user.username,
    //         // isVerified: user.isVerified,
    //         dateCreated: user.dateCreated,
    //         // profileImage: user.profileImage,
    //         token,
    //       },
    //     });
    //   } catch (error) {
    //     response.status(500).send({
    //       responseCode: ResponseCode.INTERNAL_SERVER_ERROR,
    //       responseMessage: "Internal server error",
    //       data: null,
    //     });
    //     console.log(error.message);
    //   }

