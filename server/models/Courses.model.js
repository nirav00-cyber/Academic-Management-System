const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    course_name: {
        type: String,
        required:true
    },
    faculty_name: {
        type: String,
        required:true
    },
    students: [],
    announcements: []

});

const CourseModel = mongoose.model("Course", CourseSchema);

module.exports = CourseModel;