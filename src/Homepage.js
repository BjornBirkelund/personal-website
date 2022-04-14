import React from 'react';
import layer2 from './layer2.svg';
import {Tab, Tabs, Typography} from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';



const Homepage = () => {
    const styles= {
        section: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        tabs: {
            borderRadius: 40,
        },

    }
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <body style={{margin: 0, color: 'white', background: '#202731', padding: 0, width: '100vw', height: '100vh'}}>
        <div style={{width: '100%', position: "fixed", zIndex: 10}}>
            <Tabs
                centered
                value={value}
                onChange={handleChange}
                textColor='white'
                indicatorColor="primary"
                aria-label="secondary tabs example"
            >
                <Tab style={styles.tabs} value="one" label="Home" />
                <Tab style={styles.tabs} value="two" label="Background" />
                <Tab style={styles.tabs} value="three" label="Skills" />
                <Tab style={styles.tabs} value="four" label="Showcase" />
                <Tab style={styles.tabs} value="five" label="Contact" />
            </Tabs>
        </div>
        <div style={{height:300}}></div>
        <div style={{position: 'relative'}}>
            <section style={styles.section}>
                <Typography style={{position: 'fixed', top: 100, fontSize: 150, fontWeight: 900, zIndex: 1, textShadow: '5px 5px 0px #B7B7B7FF'}}>Bjorn Birkelund</Typography>
                <Typography style={{position: 'fixed', top: 300, fontSize: 50, fontWeight: 600, zIndex: 3}}>Software Engineer</Typography>
            </section>
        <div style={{position: 'relative', zIndex: 2}}>
            <div style={{
                // filter: 'drop-shadow(0 -1px 35px rgba(255,255,255,.25))',
            aspectRatio: '960/300',
            width: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(${layer2})`,
            zIndex: 2,
            }}/>
            <div style={{height: 800, width: '100vw', background: 'rgb(198,35,104)'}}></div>
        </div>
        </div>
        </body>
    );
}
export default Homepage;