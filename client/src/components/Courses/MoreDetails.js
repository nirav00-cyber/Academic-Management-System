import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React,{ useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Axios from "axios";
import classes from "./CourseDetails.module.css";
import AnnText from './AnnText';
import Students from './Students';
import { useAuth } from '../../lib/AuthContext';
import EnrollReqs from './EnrollReqs';

const TextItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1dfge2' : 'lightblue',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'flex-start',
    color: theme.palette.text.secondary,
    margin: 10,
    wordWrap: 'noWrap',
    height:200
}));

function MoreDetails(props)
{
    const [option, setOption] = useState('ann');
  const [course, setCourse] = useState();
  const { userInfo,config } = useAuth();
  const [counter, setCounter] = useState(false);
  useEffect(() =>
    {
        const getData = async () =>
        {   
          try
          {
            console.log(props.courseId);
            const response = await Axios.get(`http://localhost:3001/courses/${ props.courseId }`, config);
          console.log(response.data);
          setCourse(response.data);
          
            // return response.data;
        } catch (err)
        {
            console.log(err);
          
        }    
    }

        getData();

  }, [props, config, counter]);
  const alterCounter = () =>
  {
    setCounter((prevState) => !prevState);
  }
    const switchToStudent = () =>
    {
        if (option === 'stu')
            return;
    setOption('stu');
  }
  const switchToEnrollReqs = () =>
  {
    if (option === 'enrollReqs')
      return;
    setOption('enrollReqs');
  }
  const switchToAnn = () =>
  {
      if (option === 'ann')
          return;
    setOption('ann');
  }
  
  return (
      
        <>
      <div className={classes.buttonContainer}>
                <Button variant="text" onClick={switchToStudent}>Students</Button>
                <div>|</div>
          <Button variant="text" onClick={switchToAnn}>Announcements</Button>
          {userInfo.userInfo.role === 'faculty' &&   
          <>
          <div>|</div> 
          <Button variant="text" onClick={switchToEnrollReqs}>Enrollment Requests</Button>
          </>}
          
</div>
    <Container maxWidth="md" >
          
        {option==='ann' && <>
          <Grid item xs={5}>
              <TextItem>
                <AnnText></AnnText>
          </TextItem>
            </Grid>
            <Grid item xs={5}>
              <TextItem>
                <AnnText></AnnText>
          </TextItem>
            </Grid>
            <Grid item xs={5}>
              <TextItem>
                <AnnText></AnnText>
          </TextItem>
        </Grid>
          </>}

          {option==='stu' &&<>
            <Students studentsData={course.students}>
            </Students>
        </>}
        {option==='enrollReqs'
          && 
          <EnrollReqs courseData={course} alterCounter={alterCounter}></EnrollReqs>
        }
            </Container>
            </>
  )
}

export default MoreDetails;
