import React from 'react'
import ReactDOM from 'react-dom'
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import {ThemeProvider} from "@emotion/react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Homepage from './Homepage';
// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>

const theme = createTheme({
    palette: {
        primary: {
            main: '#FA7268',
        },
        secondary: {
            main: green[500],
        },
    },
});
class App extends React.Component {
    render() {
       return (
           <ThemeProvider theme={theme}><Homepage></Homepage></ThemeProvider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
