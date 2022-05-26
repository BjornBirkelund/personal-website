import * as React from 'react';
import MUIAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/AcUnit';
import {Slide, Tab, Tabs, useScrollTrigger} from "@mui/material";
import {colors} from "./values";
import {makeStyles} from "@mui/styles";

const pages = [
    {name: 'Home', href: '#home', value: 'one'},
    {name: 'Background', href:'#background', value: 'two'},
    {name: 'Skills', href: '#skills', value: 'three'},
    {name: 'Showcase', href: '#showcase', value: 'four'},
    {name: 'Contact', href: '#contact', value: 'five'}
];

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

const useStyles = makeStyles(() => ({
    menu: {
        "& .MuiPaper-root": {
            backgroundColor: colors.black
        }
    }
}));

function HideOnScroll(props: Props) {
    const { children, window} = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}


const AppBar = () => {
    const classes = useStyles();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    const [value, setValue] = React.useState('one');

    const handleChange = (event: any, newValue: React.SetStateAction<string>) => {
        setValue(newValue);
    };

    return (
        <HideOnScroll>
            <MUIAppBar sx={{backgroundColor: colors.black}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ color: 'white', display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#home"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            BJORN
                        </Typography>
                        <Box sx={{flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color='primary'
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                className={classes.menu}
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem component="a" href={page.href} key={page.name} onClick={handleCloseNavMenu} sx={{color: 'white'}}>
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{color: 'white', display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            BJORN
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: {xs: 'none', md: 'flex'}, justifyContent: 'center', ml: '-10vw' }}>
                            <Tabs
                                selectionFollowsFocus
                                value={value}
                                onChange={handleChange}
                                textColor='primary'
                                indicatorColor="primary"
                                aria-label="header-tabs"
                                sx={{height: 60, display: { xs: 'block'}}}
                            >
                                {pages.map((page) =>
                                    <Tab  sx={{height: 60}} component="a" href={page.href} value={page.value} label={<span style={{ color: 'white' }}>{page.name}</span>} />
                                )}
                            </Tabs>
                        </Box>
                    </Toolbar>
                </Container>
            </MUIAppBar>
        </HideOnScroll>
    );
};
export default AppBar;
