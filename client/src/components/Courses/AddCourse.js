import React, { useRef } from 'react';
import Axios from "axios";
function AddCourse()
{
    const courseInputRef = useRef();
    const facultyInputRef = useRef();

    const addCourseHandler = async (e) =>
    {
        e.preventDefault();
        const course = {
            course_name: courseInputRef.current.value,
            faculty_name: facultyInputRef.current.value,
            students: [1, 2, 3, 4],
            announcements: ["arg", "aweg", "egr"]
        };

        try
        {
            const response = await Axios.post("http://localhost:3001/courses/addNewCourse", course);
            console.log(response);
            console.log("course Added successfully");
        }
        catch (err)
        {
            console.log("error occured",err);
        }
    }
  return (
      <form onSubmit={addCourseHandler}>
          <label htmlFor='courseName'>Course Name</label>
          <input type="text" ref={courseInputRef} placeholder="Enter course name here" id="courseName"></input>
          <label htmlFor='facultyName'>Faculty Name</label>
          <input type="text" ref={facultyInputRef} placeholder="Enter Faculty name here" id="facultyName"></input>

          <button type='submit'>Create Course</button>
    </form>
  )
}

export default AddCourse;