const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    course_name: {
        type: String,
        required:true
    },
    description: {
        type: String,
      required:true  
    },
    faculty_name: {
        type: String,
        required:true
    },
    students: [
        {
            id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            contactNumber: {
                type: String,
            }
        }
   ],
    announcements: [
        {
            text: {
                type: String,
                required:true
            }
        }
    ],
    enrollmentReqs: [
        {
            id: {
                type: String,
                required: true,
                unique:true
            },
            name: {
                type: String,
                required:true
            },
            email: {
                type: String,
                required:true
            },
            contactNumber: {
                type: String,
            }
        }
    ],

});

const CourseModel = mongoose.model("Course", CourseSchema);

module.exports = CourseModel;