const express = require('express');
const UserModel = require('../models/User.model');

const AuthRouter = express.Router();


AuthRouter.post('/loginUser', async (req, res) =>
{
        const user = await UserModel.findOne({
            email: req.body.email,
            password: req.body.password
        });

        if (user)
        {
            return res.json({ status: 'ok', user: true });

        }
        else
        {
            res.json({ status: 'error', user: false });    
        }

    
})

AuthRouter.post('/registerUser', async(req, res) =>
{
    try
    {
        console.log("request made");
        const userInfo = req.body;
        const newUser = new UserModel(userInfo);
        await newUser.save();
        res.json({ status: 'ok' });
    }
    catch (err)
    {
        res.json({ status: 'error', body: err });
    }
    // const newCourse = new CourseModel(details);
    // await newCourse.save();
    
    // res.json(details);
});



module.exports = AuthRouter;