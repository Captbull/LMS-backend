const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const loginRouter = require("./routes/login")
const app = express()


dotenv.config()


app.get('/', (req, res) =>{
    res.send('LMS is here') 
})

app.use(express.json())
app.use(express.urlencoded({extended: true}));

// 

app.use("/user/", userRouter)
app.use("/login/", loginRouter )

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})

const connectDB = process.env.MONG0_URL

mongoose.connect(connectDB).then(() =>{
    console.log('database connection successful');
}).catch((err) => {
    console.log('database connection failed' + err)
})


