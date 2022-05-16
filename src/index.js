import React from 'react'
import ReactDOM from 'react-dom'
import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import {ThemeProvider} from "@emotion/react";
import './styles.css';
import Homepage from './homepage';
const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
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
