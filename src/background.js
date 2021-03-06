import { useInView } from 'react-intersection-observer';

import {Typography} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import {TimelineOppositeContent} from "@mui/lab";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import React from "react";
import {makeStyles} from "@mui/styles";

import './styles.css';
// import {colors} from "./values";

const useStyles = makeStyles({
    section: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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



const Background = () => {
    const classes = useStyles();

    // const {ref: edRef, inView: edInView} = useInView({"triggerOnce": true});
    const {ref: bgRef, inView: bgInView} = useInView({"triggerOnce": true});


    // const myRef = useRef();
    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 // Add the animation class
    //                 entry.target.classList.add('entry-animation');
    //             }
    //             console.log('entry', entry);
    //         });
    //     })
    //     observer.observe(myRef.current);
    // })

    return (
        <div className="background-container">
            <div className={classes.centered} id="background">
                <Typography style={{fontSize: '5vw', fontWeight: 900, color: 'white', margin: '60px 0px', zIndex: 1}}>Educational Journey</Typography>
            </div>
            <div ref={bgRef} className={`${classes.centered} ${bgInView ? 'entry-animation' : ''}`}>
                <div className='background-card'>
                    <Timeline style={{color: 'black', margin: '1.9vw 0vw', padding: '0 1vw'}} position="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent color="white">
                                <Typography style={{fontSize: '1.03vw'}}>
                                    After graduating high school I moved to Norway with the goal of learning Norwegian to be able to speak with family and apply to the University of Oslo, where fluency is required.
                                    <br/><br/>Took a fast-paced Norwegian Course followed by a challenging Norwegian test to
                                    prove my fluency in Norwegian to qualify to apply to the University.<br/><br/>
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator className={classes.timelineSeparator}>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography style={{fontWeight: 900, fontSize: '3.4vw'}}>The Move</Typography>
                                <Typography style={{fontWeight: 900, fontSize: '1.2vw'}}>Fall 2018</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent color="white">
                                <Typography style={{fontSize: '1.03vw'}}>Bachelor in Computer Science centered around design
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
                                <Typography style={{fontWeight: 900, fontSize: '3.4vw'}}>University of Olso</Typography>
                                <Typography style={{fontWeight: 900, fontSize: '1.2vw'}}>Spring 2019 - Spring 2021</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent color="white">
                                <Typography style={{fontSize: '1.03vw'}}>
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
                                <Typography style={{fontWeight: 900, fontSize: '3.4vw'}}>UC Berkeley</Typography>
                                <Typography style={{fontWeight: 900, fontSize: '1.2vw'}}>Fall 2021</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    );
};

export default Background;