import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import classes from "./CourseDetails.module.css";


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


function CourseDetails() {
    return (
    <div className='container'>
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={0}>
        <Grid item xs={7}>
          <Item>Course  Name</Item>
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