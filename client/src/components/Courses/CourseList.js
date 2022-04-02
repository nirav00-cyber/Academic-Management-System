import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import classes from './CourseList.module.css';
import { useNavigate } from 'react-router-dom';
import CourseItem from './CourseItem';
import { useAuth } from '../../lib/AuthContext';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ddf',
//   ...theme.typography.body2,
//   padding: theme.spacing(4),
//   textAlign: 'center',
//     color: theme.palette.text.secondary,
//   margin:15
// }));

function CourseList()
{
    
    const [listOfCourses, setListOfCourses] = useState([]);
    const navigate = useNavigate();
    const { getCourses } = useAuth();

    useEffect(() =>
    {
        const getData = async () =>
        {
            const response = await getCourses();
            
            console.log(response);
            if (response.status === 'login')
                navigate('/login');
            else 
                setListOfCourses(response);
            
        }
        getData();
    }, [navigate,getCourses]);

    
    
    return (
        <div className={classes.container}>
        <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {listOfCourses.map((course) =>
            (
            <CourseItem key={course._id} cid={course._id} course_name={course.course_name}></CourseItem>

        ))}
            </Grid>
            </Box>
            </div>
  );
}

export default CourseList;