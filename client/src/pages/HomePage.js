import React from 'react';
import homePage from '../utils/homePage.jpg';
import classes from './HomePage.module.css';
import AnnText from '../components/Courses/AnnText';
import EventIcon from '@mui/icons-material/Event';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function HomePage()
{
  return (
    <>
    
    <div className={classes.img_container}> 
      <img src={homePage} alt="homeimage"/>
    </div>
    <div className={classes.separator}></div>
    
      <div className={classes.part2}>
        
        <div className={classes.notice}> <AnnText className={classes.ann}/> </div>
      
        <div className={classes.icons}>
          <EventIcon className={classes.event}/>
          <DateRangeIcon />
          <EmojiEventsIcon/>
        </div>
      </div>
  </>
      
  )
}

export default HomePage;