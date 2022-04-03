import React, { useRef } from 'react';
import { useAuth } from '../../lib/AuthContext';
import classes from './AddCourse.module.css';

function AddCourse()
{
    
    const courseInputRef = useRef();
    const facultyInputRef = useRef();
    const courseDescInputRef = useRef();
    const { addCourse } = useAuth();
    const addCourseHandler = async (e) =>
    {
        e.preventDefault();
        const courseData = {
            course_name: courseInputRef.current.value,
            faculty_name: facultyInputRef.current.value,
            description:courseDescInputRef.current.value,
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
      
       <div className={classes.container}>
        <h2 className={classes.h2}>New Course</h2>
          
      <form onSubmit={addCourseHandler}>
          <div className={classes.form_control}>
             <label htmlFor='courseName'>Course Name</label>
             <input type="text" ref={courseInputRef} placeholder="Enter course name here" id="courseName"></input>
          </div>

          <div className={classes.form_control}>
            <label htmlFor='facultyName'>Faculty Name</label>
                  <input type="text" ref={facultyInputRef} placeholder="Enter Faculty name here" id="facultyName"></input>
                  
          </div>
            <div className={classes.form_control}>
            <label htmlFor='courseDesc'>Course Description</label>
            <textarea type="text" ref={courseDescInputRef} placeholder="Enter Course Description here" id="courseDesc"></textarea>
            </div>
              
          <button type='submit' className={classes.btn}>Add Course</button>

                <button className={classes.btn}type='button'>Cancel</button>
    </form>
    </div>
  )
}

export default AddCourse;