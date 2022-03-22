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


coursesRouter.post('/', async(req, res) =>
{
     const details = req.body;
    const newCourse = new CourseModel(details);
    await newCourse.save();
    
    res.json(details);
});



module.exports = coursesRouter;