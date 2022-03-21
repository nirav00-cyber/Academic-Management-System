const express = require("express");
const app = express();
const mongoose = require('mongoose');

const userModel = require('./models/Users');
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://projectAms:ams123@cluster0.zwjrv.mongodb.net/AMS?retryWrites=true&w=majority"); //Paste mongo link inside

app.get("/getCourses", (req, res) =>
{
    userModel.find({}, (err, result) =>
    {
        if (err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});

app.post("/addNewCourse",async(req, res) =>
{
    const user = req.body;
    const newUser = new userModel(user);
    await newUser.save();
    
    res.json(user);
});

app.listen(3001, () =>
{
    console.log("listening on port 3001...");
});
