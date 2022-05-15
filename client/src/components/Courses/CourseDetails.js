import React,{useState,useEffect} from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import classes from "./CourseDetails.module.css";
import Axios from "axios";
import { useParams } from 'react-router-dom';
import { useAuth } from '../../lib/AuthContext';

import MoreDetails from './MoreDetails';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1dfge2' : '#ffc',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'flex-start',
    color: theme.palette.text.secondary,
    margin: 10,
    wordWrap: 'noWrap',
    height:200
}));


function CourseDetails()
{
 
  const [course, setCourse] = useState([]);
  const { courseId } = useParams();
  const { userInfo, config,addEnrollReq,updateUserInfo } = useAuth();
  const [isEnrolled, setIsEnrolled] = useState(false)
  const [isApproving, setIsApproving] = useState(false);

    useEffect(() =>
    {
      console.log(userInfo);
        const getData = async () =>
        {
          
        try
        {
          const updatedUserData = await updateUserInfo(userInfo.userInfo._id);
          
          const response = await Axios.get(`http://localhost:3001/courses/${ courseId }`, config);
        
            setCourse(response.data);
          console.log(response.data);
          const coursesTakenArray = updatedUserData.coursesTaken;
          
          console.log(userInfo);
          if (userInfo.userInfo.role === 'faculty' || (coursesTakenArray && coursesTakenArray.find((cId) => cId===courseId)))
          {
            console.log("it ran");
            setIsEnrolled(true);
          
          }
          if (userInfo.coursesPending &&
            userInfo.coursesPending.find(courseId))
            setIsApproving(true);
            // return response.data;
        } catch (err)
        {
            console.log(err);

        }    
    }
        getData();
    }, [courseId,config,userInfo,updateUserInfo]);


  console.log(course);
  console.log(userInfo);
  const enrollToCourse = async() =>
  {
    setIsApproving(true);
    const enrollmentData = {
      courseId:courseId,
      id: userInfo.userInfo._id,
      name: userInfo.userInfo.name,
      email: userInfo.userInfo.email,
      contactNumber:userInfo.userInfo.contactNumber
    }
    try
    {
      console.log(enrollmentData);
      const response = await addEnrollReq(enrollmentData);
    console.log(response);

    } catch (err)
    {
      console.log(err); 
    }

    //  also store it into the database of the course that student is waiting for the approval and 
    // store it in students pending courses for approval
  }
    return (
      <div className={classes.container}>
        <div className={classes.course_container}>
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
                        <Item>
                            <div>
                                {course.course_name}
                            </div>                  {course.faculty_name}                               <div>
                            {course.description}
                </div>
                
              </Item>
              
        </Grid>
        {/* <Grid item xs={5}>
          <Item>Attee Data</Item>
        </Grid> */}
      </Grid>
        </Box>
        </div>
        <CssBaseline />
        {!isEnrolled && !isApproving &&  
          <div className={classes.enrollButton}>
            <Button variant='contained' onClick={enrollToCourse} >Enroll</Button>
            </div>
        }
        {
          isApproving && <div className={classes.enrollButton}>
            <Typography variant='h6' color='blue'>
              Enrolled !
             waiting for the Approval from Faculty 
            </Typography>
          </div>
        }

        {isEnrolled &&  
          
          <MoreDetails courseId={courseId} />
        }
            </div>
  )
}

export default CourseDetails;