const express = require("express");
const app = express();
const mongoose = require('mongoose');

const userModel = require('./models/Users');
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect(); //Paste mongo link inside

app.get("/getUsers", (req, res) =>
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

app.post("/createUser",async(req, res) =>
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
