const express = require('express');
const UserModel = require('../models/User.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AuthRouter = express.Router();

// AuthRouter.get('/getUserInfo', (req, res) =>
// {
//     UserModel.find({}, (err, result) =>
//     {
//         console.log("request for getting user info");
//         if (err)
//         {
//             console.log("error");
//             res.json(err);
//         }
//         else
//         {
//             console.log("found");
//             res.json(result);
//         }
//     });
// });

AuthRouter.post('/loginUser', async (req, res) =>
{
        // const user = await UserModel.findOne({
        //     email: req.body.email,
        //     password: req.body.password
        // });

    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password)))
    {
        res.json({
            userInfo: user,
            token: generateToken(user._id),
        })    
    } else 
    {
        res.status(400);
        throw new Error('Invalid credentials');
        }
        // if (user)
        // {
        //     const token = jwt.sign({
        //         email:req.body.email
        //     }, 'secret123');
            
        //     return res.json({ status: 'ok', user: tvoken,userInfo:user });

        // }
        // else
        // {
        //     res.json({ status: 'error', user: false });    
        // }

    
})

AuthRouter.post('/registerUser', async(req, res) =>
{
    try
    {
        console.log("request made for register");
        const userInfo = req.body;
        const salt = await bcrypt.genSalt(10);
        userInfo.password = await bcrypt.hash(userInfo.password, salt);


        const newUser = new UserModel(userInfo);
        await newUser.save();
        
            res.status(201).json({
                userInfo,
                token: generateToken(newUser._id),
            })    
        
        // res.json({ status: 'ok' });
    }
    catch (err)
    {
        res.json({ status: 'error', body: err });
    }
    // const newCourse = new CourseModel(details);
    // await newCourse.save();
    
    // res.json(details);
});

const generateToken = (id) =>
{
    return jwt.sign({ id }, 'secret123', {
        expiresIn:'30d',
    })
}


module.exports = AuthRouter;