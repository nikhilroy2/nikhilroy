import React from 'react';
import './portfolio.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TopProjectPost from './topproject/topproject';
import CardProject from './cardproject/cardproject';
import clock_pic from '../../image/project_img/analog.png';
import chart_pic from '../../image/project_img/clock_pic.png';
import music_pic from '../../image/project_img/music_pic.png';


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "transparent",
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
    padding: '0'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function FortFolio() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  document.title = 'Nikhil Roy PortFolio ----- PortFolio'
  return (

<div className="container-fluid px-3 text-light">
    <div className="row no-gutters py-4 border_bottom_dotted">
            <div className="col-12 mp_0">
                <h2 className="mp_0 ">
                    Portfolio Project
                </h2>
            </div>
            
        </div>


    <div className={classes.root + ' p-0'}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs + ' order-2 sticky-top align-self-start'}
      >
        <Tab label="Top Project" {...a11yProps(0)} />
        <Tab label="UI Effect" {...a11yProps(1)} />
        <Tab label="One Page Project" {...a11yProps(2)} />
        <Tab label="Js Library Effect" {...a11yProps(3)} />
        <Tab label="Animation Project" {...a11yProps(4)} />
  >
      </Tabs>
      <div className="order-1 w-75">
      <TabPanel  value={value} index={0}>
          <TopProject/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UiEffect/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OnePageProject/>
      </TabPanel>
      <TabPanel value={value} index={3}>
       <JsLibraryEffect/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AnimationEffect/>
      </TabPanel>
      </div>
     
    </div>
    </div>
  );
}


const TopProject = ()=> {

  return (

  <TopProjectPost/>
  )
}



const UiEffect = ()=> {

  return (

   <div className="row no-gutters mp_0">
     
     <CardProject linksrc="https://nikhilroy2.github.io/Analog-Clock-with-Javascript/index.html" srcImg={clock_pic} cardTitle="Project Analog Watch"/>
     <CardProject linksrc="https://dribbble.com/shots/9529202-Chart-js-Javascript-library-learning-and-testing" srcImg={chart_pic} cardTitle="Project ChartJs with Js library"/>
     <CardProject linksrc="https://nikhilroy2.github.io/27-Days-Target-30-Project-Music-Player-with-Javascript/" srcImg={music_pic} cardTitle="Project Custom Music Player with Vanilla JavaScript"/>
   
   </div>
  )
}


const OnePageProject = ()=> {

  return (

     
     <TopProjectPost/>

  )
}

const JsLibraryEffect = ()=> {

  return (

   <TopProject/>
  )
}

const AnimationEffect = ()=> {

  return (

     
     <TopProjectPost/>

  )
}




