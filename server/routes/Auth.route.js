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
        res.json({status:'error',error:'Invalid Crendentials or User not Exist'});

        // throw new Error('Invalid credentials');
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

AuthRouter.post('/addToCoursesTaken', async (req, res) =>
{
    const details = req.body;
    const courseId = details.courseId;
    const studentId = details.studentId;

    
    UserModel.findByIdAndUpdate(studentId,
        {
            $push: {
                "coursesTaken": 
                    courseId
            }        
        },
        {
            safe: true, upsert: true
        },
        function(err, model) {
         if(err){
        	console.log(err);
        	return res.send(err);
         }
          return res.json(model);
        }
    ) 
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

AuthRouter.post('/getUserInfo', async (req, res) =>
{


    const userId = req.body.userId;
    UserModel.findById(userId, (err, result) =>
    {
        console.log(userId);   
        if (err)
        {
            res.json(err);
        }
        else 
        {
            res.json(result);
        }
    });
    
})

const generateToken = (id) =>
{
    return jwt.sign({ id }, 'secret123', {
        expiresIn:'30d',
    })
}


module.exports = AuthRouter;