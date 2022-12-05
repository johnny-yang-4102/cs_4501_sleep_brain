
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';


import {
    BrowserRouter as Router,
    Routes, Route, Link
} from "react-router-dom"
import ScreenBrain from '../screens/ScreenBrain';
import ScreenSleepBrainEffects from '../screens/ScreenSleepBrainEffects';
import ScreenSleep from '../screens/ScreenSleep';
import ScreenHome from '../screens/ScreenHome';
import Refernces from '../screens/References';
import { Button } from '@mui/material';

const pages = ['About', 'Projects', 'Contact'];

const NavBar = () => {
    const padding = {
        padding: 10
    }

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" elevation={0} sx={{ background: "#FFFFFF", borderBottom: 2, paddingBottom: 2, borderColor: "#000000" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: { xs: 'flex' }, flexDirection: "row", justifyContent: "space-between" }}>

                    {/* TODO fix this -- mobile screen needs title too */}
                    {/* LOGO */}
                    <Typography
                        variant="h2"
                        noWrap
                        component="div"
                        color="black"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        Sleep + brain
                    </Typography>

                    {/*Drawer - small screen  */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                        {/* Menu triple bar */}
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="default"
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* ABOUT, PROJECTS, CONTACT - small screen */}
                        <Menu
                            id="menu-appbar"
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
                            <Router>

                                <div>
                                    <MenuItem> <Link style={padding} to="/">Home</Link> </MenuItem>
                                    <MenuItem><Link style={padding} to="/sleep">Sleep</Link></MenuItem>
                                    <MenuItem><Link style={padding} to="/brain">Brain</Link></MenuItem>
                                    <MenuItem><Link style={padding} to="/sleep_brain_effects">Effects of Sleep on Brain</Link></MenuItem>
                                </div>

                                <Routes>
                                    <Route path="/" element={<ScreenHome />} />
                                    <Route path="/brain" element={<ScreenBrain />} />
                                    <Route path="/sleep" element={<ScreenSleep />} />
                                    <Route path="/sleep_brain_effects" element={<ScreenSleepBrainEffects />} />
                                </Routes>

                            </Router>

                        </Menu>
                    </Box>

                    {/* LOGO - small screen */}
                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        color="black"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        Sleep + Brain
                    </Typography>

                    {/* ABOUT, PROJECTS, CONTACT - full screen */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: "flex-end" }}>
                        <Router>

                            <div>
                                <Button><Link style={padding} to="/">Home</Link></Button>
                                <Button><Link style={padding} to="/sleep">Sleep</Link></Button>
                                <Button><Link style={padding} to="/brain">Brain</Link></Button>
                                <Button><Link style={padding} to="/sleep_brain_effects">Effects of Sleep on Brain</Link></Button>
                            </div>

                            <Routes>
                                <Route path="/" element={<ScreenHome />} />
                                <Route path="/brain" element={<ScreenBrain />} />
                                <Route path="/sleep" element={<ScreenSleep />} />
                                <Route path="/sleep_brain_effects" element={<ScreenSleepBrainEffects />} />
                            </Routes>

                        </Router>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;