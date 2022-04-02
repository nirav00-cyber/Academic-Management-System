const express = require("express");
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const coursesRouter = require('./routes/Courses.route');
const AuthRouter = require('./routes/Auth.route');
const { protect } = require('./middleware/AuthMiddleware');

const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://projectAms:ams123@cluster0.zwjrv.mongodb.net/AMS?retryWrites=true&w=majority"); //Paste mongo link inside

app.use('/courses', protect ,coursesRouter);
app.use('/auth', AuthRouter);

app.listen(3001, () =>
{
    console.log("listening on port 3001...");
});
