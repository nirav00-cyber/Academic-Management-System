import React, { useRef } from 'react';
import Axios from "axios";
import classes from "./AddCourse.module.css";

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
    <div className={classes.container}>
        <h2 className={classes.h2}>Add Course</h2>
          
      <form onSubmit={addCourseHandler}>
          <div className={classes.form_control}>
             <label htmlFor='courseName'>Course Name</label>
             <input type="text" ref={courseInputRef} placeholder="Enter course name here" id="courseName"></input>
          </div>

          <div className={classes.form_control}>
            <label htmlFor='facultyName'>Faculty Name</label>
            <input type="text" ref={facultyInputRef} placeholder="Enter Faculty name here" id="facultyName"></input>
          </div>

          <button type='submit' className={classes.btn}>Add</button>

                <button className={classes.btn}type='button'>Cancel</button>
    </form>
    </div>
  )
}

export default AddCourse;