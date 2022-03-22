import React,{useState,useEffect} from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import classes from "./CourseDetails.module.css";
import Axios from "axios";
import { useSearchParams,useParams } from 'react-router-dom';

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

const dummy = {
    course_name: "xyz",
    faculty_name: "abc",
    students: ["1", "2", "3", "4"],
    announcements:["ac1","ac2","ac2"]
}

function CourseDetails()
{
 
    const { courseId } = useParams();
    const [course, setCourse] = useState([]);

    useEffect(() =>
    {
        const getData = async () =>
        {
            try
            {
                // console.log(courseId);
                const response = await Axios.get(`http://localhost:3001/courses/${ courseId }`);
                
                setCourse(response.data);
                console.log(response.data);
                // console.log(listOfCourses);
                

            } catch (err)
            {
                console.log("error ocuured while getting");
            }
        }
        getData();

    }, [courseId]);

    // const addCourseDetails = async () =>
    // {
    //     try
    //     {
    //         const response = await Axios.post("http://localhost:3001/courses", dummy);
    //         console.log(response);
    //     }
    //     catch (err)
    //     {
    //         console.log("error Occured while posting data");
    //     } 
    // }
    // console.log(courses[0].course_name, "ye");
    // addCourseDetails();
    console.log(course);
    return (
    <div className='container'>
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={0}>
        <Grid item xs={7}>
                        <Item>
                            <div>
                                {course.course_name}
                            </div>                  {course.faculty_name}                               <div>
                                {/* {courses[0].faculty_name} */}
                            </div>
                        </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>Attee Data</Item>
        </Grid>
      </Grid>
    </Box>
        <CssBaseline />
        <div className={classes.buttonContainer}>
                <Button variant="text">Students</Button>
                <div>|</div>
<Button variant="text">Announcements</Button>
</div>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
            </div>
  )
}

export default CourseDetails;