import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import { ArrowForwardIos } from '@mui/icons-material';
import MenuItem from '@mui/material/MenuItem';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';

const pages = ['Features', 'Testimonials', 'CallToAction'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (

  
    <AppBar sx={{position:'sticky',top:'0px',marginBottom:'50px'}}>


     


        <Toolbar >

          <SportsFootballIcon  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

          <Typography
            variant="h6"
           
           
            sx={{
              mr: 4,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SportZZ
          </Typography>


        <Box sx={{  display: { xs: 'flex', md: 'none' } }}>

            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
                  <MenuIcon />

            </IconButton>

            <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            keepMounted
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}

                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                            >
                            {pages.map((page) => (

                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page}</Typography>
                                </MenuItem>

                            ))}


            </Menu>

        </Box>
          
          <SportsFootballIcon  sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          <Typography
            variant="h5"
           
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
             SportZZ
          </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%',
          '@media (max-width:900px)':{
            justifyContent:'flex-end'
          }
         }}> 

            <Box sx={{ display: { xs: 'none', md: 'flex' }}}>

              {pages.map((page) => (
                
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white'}}
                >
                  {page}
                </Button>
              ))}

            </Box>

            <Box >


                  <Button endIcon={<ArrowForwardIos/>} sx={{color:'white',bgcolor:'black',
                    borderRadius:'25px',
                  '&:hover': {
                    backgroundColor: 'black', 
                    color: 'white',
                  
                  }
                    
                  }}>
                      Login
                  </Button>

            </Box>
        </Box>  

      </Toolbar>

     
    </AppBar>

    

    
     

     
  );
}
export default ResponsiveAppBar;
