import React from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import classes from './CourseItem.module.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ddf',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
    color: theme.palette.text.secondary,
  margin: 15,
  
}));


function CourseItem(props) {
    const navigate = useNavigate();
    const courseDetailHandler = () =>
    {
        navigate(`/courses/${props.cid}`);
    }
  return (

            <Grid item xs={4} onClick={courseDetailHandler} >
                        <Item className={classes.grid_container}>{props.course_name}</Item>
      </Grid>
    
  )
}

export default CourseItem;