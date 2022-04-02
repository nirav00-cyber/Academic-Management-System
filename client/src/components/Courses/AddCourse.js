import React, { useRef } from 'react';
import { useAuth } from '../../lib/AuthContext';
function AddCourse()
{
    const courseInputRef = useRef();
    const facultyInputRef = useRef();
    const { addCourse } = useAuth();
    const addCourseHandler = async (e) =>
    {
        e.preventDefault();
        const courseData = {
            course_name: courseInputRef.current.value,
            faculty_name: facultyInputRef.current.value,
            students: [1, 2, 3, 4],
            announcements: ["arg", "aweg", "egr"]
        };
        const response = await addCourse(courseData);
        console.log(response);
        if (response.status === 'ok')
            console.log('course Added succesfully');
        else
            console.log('failed to add course');
        
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