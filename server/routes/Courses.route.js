const express = require('express');
const CourseModel = require('../models/Courses.model');

const coursesRouter = express.Router();

coursesRouter.get('/', (req, res) =>
{
    CourseModel.find({}, (err, result) =>
    {
        console.log("re");
        if (err)
        {
            console.log("error");
            res.json(err);
        }
        else
        {
            console.log("found");
            res.json(result);
        }
    });
});



coursesRouter.get('/:courseId', (req, res) =>
{
    console.log(req.params.courseId );
    CourseModel.findById(req.params.courseId, (err, result) =>
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
    
})




coursesRouter.post('/addNewCourse', async(req, res) =>
{
    try
    {
        const details = req.body;
        const newCourse = new CourseModel(details);
        await newCourse.save();
        res.json(details);
    }
    catch (err)
    {
        console.log(err);
        res.json({ status: "error", error: err });
    }
});

coursesRouter.post('/addEnrollmentReq', async(req, res) =>
{

    const details = req.body;
    const courseId = details.courseId;
    console.log(details);
    const enrollmentData = {
        name: details.name,
        email: details.email,
        id: details.id,
        contactNumber:details.contactNumber
    }
    CourseModel.findByIdAndUpdate(courseId,
        {
            $push: { "enrollmentReqs": enrollmentData }
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
});

coursesRouter.post('/removeEnrollmentReq', async(req, res) =>
{

    const details = req.body;
    const courseId = details.courseId;
    const studentData = details.studentData;
    const studentId = details.studentData.id;
console.log("from the backend")
    
    CourseModel.findByIdAndUpdate(courseId,
        {
            $pull: {
                "enrollmentReqs": {
                    id: studentId
                }
            },
            $push: {
                "students": 
                    studentData
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
    
});

module.exports = coursesRouter;