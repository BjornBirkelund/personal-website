import React from 'react';
import layer2 from './layer2.svg';
import layer3 from './layer3.svg';
import layer4 from './layer4.svg';
import {makeStyles}  from "@mui/styles";
import {Tab, Tabs, Typography} from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {TimelineOppositeContent} from "@mui/lab";

const colors = {
    darkPink: '#C62267',
    lightPink: '#DA3E67',
    darkOrange: '#EB5967',
    lightOrange: '#FA7269',
    black: '#202731',
}
// '#adadad'
// '#af3456'
// '#e9426e'

const useStyles = makeStyles({
    section: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    root: {
        '$.vertical-timeline.vertical-timeline-custom-line::before': {
        background: '#dc1f1f',
        },
        height: 200,
    },
    tabs: {
        borderRadius: 40,
    },
    timelineSeparator: {
        // height: 200,
        // background: 'black',
    },
    centered: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    horiCenter: {
        display: 'flex',
        justifyContent: 'center',
    },
    timelineColor: {
        // color: colors.black,
    }
})

const Homepage = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <body style={{margin: 0, color: 'white', background: colors.black, padding: 0, width: '100vw', height: '100vh'}}>
            <div style={{width: '100%', position: "fixed", zIndex: 10}}>
                <Tabs
                    centered
                    value={value}
                    onChange={handleChange}
                    textColor='white'
                    indicatorColor="primary"
                    aria-label="secondary tabs example"
                >
                    <Tab component="a" href="#home" className={classes.tabs} value="one" label="Home" />
                    <Tab component="a" href="#background" className={classes.tabs} value="two" label="Background" />
                    <Tab component="a" href="#skills" className={classes.tabs} value="three" label="Skills" />
                    <Tab className={classes.tabs} value="four" label="Showcase" />
                    <Tab className={classes.tabs} value="five" label="Contact" />
                </Tabs>
            </div>
            <div id="home" style={{height:300}}></div>
            <div style={{position: 'relative'}}>
                <section className={classes.section}>
                    <Typography style={{position: 'fixed', top: 100, fontSize: 150, fontWeight: 900, zIndex: 1, textShadow: '5px 5px 0px #B7B7B7FF'}}>Bjorn Birkelund</Typography>
                    <Typography style={{position: 'fixed', top: 300, fontSize: 50, fontWeight: 600, zIndex: 1}}>Software Engineer</Typography>
                </section>
            <div style={{position: 'relative', zIndex: 2}}>
                <div style={{
                    // filter: 'drop-shadow(0 -1px 35px rgba(255,255,255,.25))',
                aspectRatio: '960/300',
                width: '100%',
                backgroundImage: `url(${layer2})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                zIndex: 2,
                }}/>
                <div style={{height: 1400, width: '100vw', background: colors.darkPink}}>
                    <div className={classes.centered} id="background">
                        <Typography style={{fontSize: 85, fontWeight: 900, color: 'black', margin: '130px 0px', zIndex: 1, textShadow: '5px 5px 0px #252525FF'}}>Educational Journey</Typography>
                    </div>
                    <div className={classes.centered}>
                        <div style={{
                            height: 785, width: 1000,
                            borderRadius: 30,
                            boxShadow: '31px 31px 62px #981a4f, -31px -31px 62px #f42a7f',
                            // background: 'linear-gradient(145deg, #B9365AFF, #e9426e)',
                            // background: colors.lightPink,
                            // boxShadow:  '31px 31px 62px #a81d58, -31px -31px 62px #e42776',
                            // borderStyle: 'solid',
                            // borderWidth: '5px',
                            // borderColor: 'rgb(189,189,189)',
                        }}>
                            <Timeline style={{color: 'black', marginTop: 25}} position="alternate">
                                <TimelineItem>
                                    <TimelineOppositeContent color="white">
                                        <Typography style={{fontSize: 16}}>
                                            After graduating high school I moved to Norway with the goal of learning Norwegian to be able to speak with family and apply to the University of Oslo.
                                            <br/><br/>Took a fast-paced Norwegian Course followed by a challenging Norwegian test to
                                            prove my fluency in Norwegian to qualify to apply to the University.<br/><br/>
                                            </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator className={classes.timelineSeparator}>
                                        <TimelineDot />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Typography style={{fontWeight: 900}} variant='h3'>The Move</Typography>
                                        <Typography style={{fontWeight: 900}} variant='h7'>Fall 2018</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent color="white">
                                        <Typography style={{fontSize: 16}}>Bachelor in Computer Science centered around design
                                            where I learned UX/UI principles and techniques as well as computer science fundamentals.<br/><br/>
                                            <b>Relevant Coursework:</b><br/>
                                            IN1010 - Object Oriented Programming<br/>
                                            IN1060 - User Oriented Design<br/>
                                            IN2000 - Software Engineering & Project Work<br/>
                                            IN2010 - Data Structures & Algorithms<br/>
                                            IN2020 - Methods in Interaction Design<br/>
                                            <br/>
                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator className={classes.timelineSeparator}>
                                        <TimelineDot />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Typography style={{fontWeight: 900}} variant='h3'>University of Olso</Typography>
                                        <Typography style={{fontWeight: 900}} variant='h7'>Spring 2019 - Spring 2021</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent color="white">
                                        <Typography style={{fontSize: 16}}>
                                            Expanded my knowledge immensely in Computer Science, Entrepreneurship,
                                            and Blockchain/DeFi technologies.<br/><br/>
                                            <b>Relevant Coursework:</b><br/>
                                            Databases - CS 186<br/>
                                            Decentralized Finance - CS 194<br/>
                                            Blockchain Fundamentals - INDENG 198<br/>
                                            Ed-Tech and Entrepreneurship - INDENG 185<br/>
                                            Berkeley Entrepreneurship Bootcamp - INDENG 192
                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator className={classes.timelineSeparator}>
                                        <TimelineDot />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Typography style={{fontWeight: 900}} variant='h3'>UC Berkeley</Typography>
                                        <Typography style={{fontWeight: 900}} variant='h7'>Fall 2021</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </div>
                    </div>
                </div>
                    {/*background: 'linear-gradient(0deg, rgba(32,39,49,1) 0%, rgba(198,34,104,1) 90%)',*/}
            </div>
                <div style={{position: 'relative', zIndex: 2}}>
                    <div style={{
                        // filter: 'drop-shadow(0 -1px 35px rgba(255,255,255,.25))',
                        aspectRatio: '960/300',
                        width: '100%',
                        backgroundImage: `url(${layer4})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        zIndex: 2,
                    }}/>
                    <div style={{
                        background: colors.black,
                        height: 2000,
                        width: '100vw',
                    }}>
                        <div className={classes.centered} id="skills">
                            <Typography style={{fontSize: 85, fontWeight: 900, margin: '130px 0px', zIndex: 2, textShadow: '5px 5px 0px #B7B7B7FF'}}>Skills</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}
export default Homepage;