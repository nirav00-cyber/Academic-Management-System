import React, { useRef } from 'react';
import Axios from "axios";
function AddCourse()
{
    const courseInputRef = useRef();
    const addCourseHandler = async (e) =>
    {
        e.preventDefault();
        const response = await Axios.post("http://localhost:3001/addNewCourse",{name:courseInputRef.current.value});

        if (!response.ok)
        {
            console.log("error occured while adding course");
            return;
        }
        console.log("course Added successfully");
    }
  return (
      <form onSubmit={addCourseHandler}>
          <label htmlFor='courseName'>Course Name</label>
          <input type="text" ref={courseInputRef} placeholder="Enter course name here" id="courseName"></input>
          <button type='submit'>Create Course</button>
    </form>
  )
}

export default AddCourse;