import React,{useState} from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import classes from "./CourseDetails.module.css";
import AnnText from './AnnText';
import Students from './Students';



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

function MoreDetails()
{
    const [option, setOption] = useState('ann');

    const switchToStudent = () =>
    {
        if (option === 'stu')
            return;
    setOption('stu');
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
            <Students>
            </Students>
          </>}
            </Container>
            </>
  )
}

export default MoreDetails;
