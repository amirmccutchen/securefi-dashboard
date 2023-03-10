import React, { useState } from "react";
import { Menu as MenuIcon, Search, ArrowDropDownOutlined, ChevronLeftOutlined } from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import me from "../assets/me.jpg";
import { AppBar, Button, Box, Typography, IconButton, InputBase, Toolbar, Menu, MenuItem, useTheme } from "@mui/material";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen, user }) => {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);



  return (
    <AppBar sx={{
        position: 'static',
        background: 'none',
        boxShadow: 'none',
    }}>
        <Toolbar sx = {{ justifyContent: 'space-between'}}>

            {/* left */}

            <FlexBetween>
                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)} sx = {{ m: 0.5}}>
                    {isSidebarOpen ? (
                        <ChevronLeftOutlined sx = {{ fontSize: '25px' }} />
                    ) : (
                        <MenuIcon sx = {{ fontSize: '25px'}} />
                    )}
                </IconButton>
                <FlexBetween
                  backgroundColor = {theme.palette.background.alt}
                  borderRadius = '9px'
                  gap = '3 rem'
                  p = '0.1rem 1.5rem'
                >
                    <InputBase placeholder = 'Search...' />
                    <IconButton>
                        <Search />
                    </IconButton>
                </FlexBetween>
            </FlexBetween>

            {/* Right */}

            <FlexBetween gap = '1.5rem'>

                <FlexBetween>
                    <Button 
                      onClick={handleClick} 
                      sx = {{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        textTransform: 'none',
                        gap: '1rem', 
                        }}
                    >
                        <Box 
                    component = 'img' 
                    alt = 'profile'
                    src = {me}
                    height = '32px'
                    width = '32px'
                    borderRadius= '50%'
                    sx = {{ objectFit: 'cover' }}
                    />
                    <Box textAlign = 'left'>
                        <Typography fontWeight = 'bold' fontSize = '0.85rem' sx = {{ color: theme.palette.secondary[100]}}>
                          {user.name}
                        </Typography>
                        <Typography fontSize = '0.75rem' sx = {{ color: theme.palette.secondary[200]}}>
                          {user.occupation}
                        </Typography>
                      </Box>
                      <ArrowDropDownOutlined sx = {{ color: theme.palette.secondary[300], fontSize: '25px' }} />
                    </Button>
                    <Menu anchorEl = {anchorEl} open = {isOpen} onClose ={handleClose} anchorOrigin = {{vertical: 'bottom', horizontal: 'center'}}>
                        <MenuItem onClick = {handleClose}>Close</MenuItem>
                    </Menu>
                </FlexBetween>

            </FlexBetween>
        </Toolbar>
    </AppBar>
  );
};

export default Navbar;