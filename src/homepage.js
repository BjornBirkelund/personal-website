import React from 'react';
import layer2 from './images/layer2.svg';
import layer4 from './images/layer4.svg';
import skills_section from './images/skills_section.svg';
import {makeStyles}  from "@mui/styles";
import {Tab, Tabs, Typography} from "@mui/material";
import {colors} from "./values";
import Background from "./background";

const useStyles = makeStyles({
    section: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    tabs: {
        borderRadius: 40,
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
})
// dark
// textShadow: '5px 5px 0px #B7B7B7FF'
// light
// textShadow: '5px 5px 0px #B7B7B7FF'
// light-pink
// textShadow: '5px 5px 0px #A42F4EFF'


const Homepage = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <body style={{margin: 0, color: 'white', background: colors.black, padding: 0, width: '100%', height: '100vh'}}>
            <div className={classes.centered} style={{width: '100%', zIndex: 10, position: "fixed"}}>
                <Tabs
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    selectionFollowsFocus
                    value={value}
                    onChange={handleChange}
                    textColor='white'
                    indicatorColor="primary"
                    aria-label="secondary tabs example"
                >
                    <Tab  component="a" href="#home" className={classes.tabs} value="one" label="Home" />
                    <Tab  component="a" href="#background" className={classes.tabs} value="two" label="Background" />
                    <Tab  component="a" href="#skills" className={classes.tabs} value="three" label="Skills" />
                    <Tab  className={classes.tabs} value="four" label="Showcase" />
                    <Tab  className={classes.tabs} value="five" label="Contact" />
                </Tabs>
            </div>
            <div id="home" style={{height: '32vh'}}/>
            <div>
                <section className={classes.section}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', position: 'fixed'}}>
                        <Typography sx={{fontSize: '8vw', fontWeight: 900, zIndex: 1}}>Bjorn Birkelund</Typography>
                        <Typography sx={{fontSize: '3vw', zIndex: 1}}>UI/UX Developer</Typography>
                    </div>
                </section>
                <div  style={{height: '10vh'}}/>
            <div style={{position: 'relative', zIndex: 2}}>
                <div style={{
                aspectRatio: '960/300',
                width: '100%',
                backgroundImage: `url(${layer2})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                zIndex: 2,
                }}/>
                <div style={{height: 1100, width: '100vw', background: colors.darkPink}}>
                    <Background/>
                </div>
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
                    <div id="skills" className={classes.centered} style={{height: 300, width: '100%', backgroundColor: 'white'}}>
                        <Typography style={{fontSize: '5vw', fontWeight: 900, margin: '130px 0px', zIndex: 2, color: colors.darkPink}}>Skills</Typography>
                    </div>
                    <div style={{
                        // aspectRatio: '960/300',
                        width: '100%',
                        height: '290vh',
                        backgroundColor: 'white',
                        backgroundImage: `url(${skills_section})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        zIndex: 2,
                    }}>
                    </div>
                </div>
            </div>
        </body>
    );
}
export default Homepage;