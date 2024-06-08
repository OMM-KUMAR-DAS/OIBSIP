import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  Button,
  Tooltip,
  Card,
 
  CardContent,
  ListItemButton,
  ListItemIcon,
  CardHeader,
  
  
  
} from "@mui/material";



import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import DescriptionIcon from "@mui/icons-material/Description";
import MenuIcon from "@mui/icons-material/Menu";
import myImage from "../assets/WhatsApp Image 2024-05-24 at 17.58.44_1eeaeab1.jpg";
import myresume from "../assets/RESUME (3) Updated.pdf";
import Project from "../components/Project";
import Contact from "../components/Contact";
import About from "../components/About";
import { Home,Info,Build,Work,ContactPhone } from '@mui/icons-material';


const Portfolio = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Typing Effect State and Logic-----------------------------------------------------------------------------------------
  const text = "Omm kumar Das>";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      let updatedText = "";

      if (isDeleting) {
        updatedText = text.substring(0, displayText.length - 1);
      } else {
        updatedText = text.substring(0, displayText.length + 1);
      }

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === text) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        setTypingSpeed(150);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoop(loop + 1);
        setTypingSpeed(150);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting, loop, typingSpeed, text]);
  //------------------------------------------------------------------------------------------------------------

  const isMobile = useMediaQuery("(max-width:600px)");

  const TechStackRef= useRef(null)

  const projectsRef= useRef(null)
  
  const contactRef= useRef(null)

  const aboutRef= useRef(null)
  

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" || event.type === "keyup") {
      if (event.key === "ArrowDown") {
        return;
      }
    }
    setDrawerOpen(open);
  };


  function goto(item)
  {
    console.log(item)
   

    if(item==="Tech Stack" && TechStackRef.current)
      {     
        TechStackRef.current.scrollIntoView({ behavior: 'smooth' });
       
      } 
    else if(item==="Projects" && TechStackRef.current)  
      {
            projectsRef.current.scrollIntoView({behavior: 'smooth'}) 
      }

    else if(item==="Contact" && contactRef.current) 
      {
        contactRef.current.scrollIntoView({behavior:'smooth'})
      } 

      else if(item==="About" && aboutRef.current) 
        {
          aboutRef.current.scrollIntoView({behavior:'smooth'})
        } 

      
  }

  const list = () => (

    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      onKeyUp={toggleDrawer(false)}
    >
      <List>

         <ListItemButton onClick={()=>goto('Home')} >

               <ListItemIcon>
                     <Home/>
               </ListItemIcon>

               <ListItemText primary='Home'/>

         </ListItemButton>

         <ListItemButton onClick={()=>goto('About')} >

               <ListItemIcon>
                     <Info/>
               </ListItemIcon>

               <ListItemText primary='About'/>

         </ListItemButton>

         <ListItemButton onClick={()=>goto('Tech Stack')} >

               <ListItemIcon>
                     <Build/>
               </ListItemIcon>

               <ListItemText primary='Tech Stack'/>

         </ListItemButton>
         
         <ListItemButton onClick={()=>goto('Projects')} >

               <ListItemIcon>
                     <Work/>
               </ListItemIcon>

               <ListItemText primary='Projects'/>

         </ListItemButton>

         <ListItemButton  onClick={()=>goto('Contact')} >

               <ListItemIcon>
                     <ContactPhone/>
               </ListItemIcon>

               <ListItemText primary='Contact'/>

         </ListItemButton>


      </List>

    </Box>

  );

 

  return (

    <Box sx={{ backgroundColor: "#020202", width: "100%", minHeight: "100vh" }}>
      <AppBar
        position="static"
        sx={{ width: "100%", backgroundColor: "#020202" }}
      >
        <Toolbar>

          {isMobile && (

            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />

            </IconButton>
          )}

          <Typography sx={{ width: "25%" }} variant="h4">
            Portfolio
          </Typography>

          {!isMobile && (
            <Box
              sx={{
                width: "75%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {["Home", "About", "Tech Stack", "Projects", "Contact"].map(
                (text) => (
                  <Button
                    key={text}
                    onClick={()=>goto(text)}
                    sx={{
                      color: "white",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        boxShadow: "0 0 10px 0 rgba(255, 255, 255, 0.9)",
                        transform: "scale(1.1)",
                        borderRadius: "25px",
                      },
                    }}
                  >
                    {text}
                  </Button>
                )
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
{/* ---------------------------------------------------------------------------------------------------------------------------------------- */}
      <Box 
       
        sx={{
          width: "100%",
          display: "flex",
          marginTop: "50px",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap:'wrap'
        }}
      >
       

      <Box
            component="img"
            src={myImage}
            alt=' '
            sx={{
              width: {
                xs: '70%',  // 60% width for extra-small screens
                sm: '55%',  // 50% width for small screens
                md: '55%',  // 40% width for medium screens
                lg: '25%',  // 30% width for large screens
                xl: '25%',  // 25% width for extra-large screens
              },
              
              borderRadius: '100%',
              height:'400px',
              objectFit: 'cover',
              marginBottom:'20px',
              boxShadow: `
          0 0 30px 5px rgba(0, 0, 255, 0.5),   /* Blue shadow */
          0 0 30px 10px rgba(255, 20, 147, 0.3), /* Pink shadow */
          0 0 30px 15px rgba(0, 255, 0, 0.2) /* Green shadow */
        `,
              '@media (min-width: 450px) and (max-width: 600px)': {
                height: '380px', 
              },
              '@media (max-width: 449px)': {
                height: '250px', 
              },
              
              
             
            }}
      />

        <Box sx={{ width: "70%", minHeight: "5px",'@media(max-width:600px)':{
             width:'100%'
        } }}>

          <Typography
            color="#eff2ef"
            sx={{
              fontSize: "50px",
              fontWeight: "bold",
              background: "linear-gradient(to left, #f44336, #4567b7, #8f0a1a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              width: "100%",
              textAlign: "center",
              '@media(max-width:600px)':{
                fontSize:'30px',
                marginTop:'15px'
              }
            }}
          >
            Hello, it's Me
          </Typography>

          <Typography

            color="#eff2ef"

            sx={{
              width: "100%",
              fontSize: "50px",
              fontWeight: "bold",
              opacity: 1,
              transition: "opacity 0.5s ease-in-out",
              textAlign: "center",
              padding: "10px",
              background: "linear-gradient(to left, #f44336, #4567b7, #8f0a1a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",

              '@media(max-width:600px)':{
                fontSize:'25px',
                marginTop:'15px'
              }

            }}

          >
            {"</"}
            {displayText}
          </Typography>

          <Box
            sx={{
              textAlign: "center",
              marginTop: "25px",
              width: "100%",
              padding: "25px",
             
            }}
          >
            <Tooltip title="LinkedIn">
              <IconButton
                href={"https://www.linkedin.com/in/omm-das-4498b124a/"}
                target="_blank"
                aria-label="LinkedIn"
                color="primary"
                sx={{
                  borderRadius: "20px", 
                  border: "2px solid blue", 
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Github">
              <IconButton
                href={"https://github.com/OMM-KUMAR-DAS"}
                target="_blank"
                aria-label="GitHub"
                color="error"
                sx={{
                  marginLeft: "30px",

                  borderRadius: "20px", 
                  border: "2px solid red", 
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Twitter">
              <IconButton
                href={"https://x.com/Omm23315327?t=lLGnQj3MQybCgtRYmOWrXg&s=09"}
                target="_blank"
                color="success"
                aria-label="Twitter"
                sx={{
                  marginLeft: "30px",

                  borderRadius: "20px", 
                  border: "2px solid green", 
                }}
              >
                <TwitterIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Download Resume">
              <IconButton
                component="a"
                href={myresume}
                download="resume.pdf"
                color="primary"
                sx={{
                  marginLeft: "30px",

                  borderRadius: "20px", 
                  border: "2px solid blue", 
                }}
              >
                <DescriptionIcon />

              </IconButton>

            </Tooltip>


          

          </Box>

        </Box>

      </Box>


      {/* --------------------------------------------------------About section---------------------------------------------------------------- */}

           <Box ref={aboutRef}  sx={{marginTop: "30px", width: "100%",padding:'10px'}} >
                <About/>
           </Box>

      {/* ---------------------------------------------------------------------------------------------------------------------------------- */}

      {/* Skills section-------------------------------------------------------------------------------------------------------------------------- */}
      <Box   ref={TechStackRef} sx={{ marginTop: "50px", width: "100%", minHeight: "100vh" }}>

        <Typography
          sx={{
            color: "black",
            width: "25%",
            fontSize: "25px",
            backgroundColor: "whitesmoke",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            borderRadius: "30px",
            fontWeight: "25px",
            padding: "8px",
            marginBottom:'45px',

            boxShadow: "0 0 20px 0 rgba(255, 255, 255, 0.9)",
            "@media (max-width:600px)": {
              width: "50%",
              padding: "5px",
            },
          }}
        >
          Tech Stack
        </Typography>

        <Box sx={{ width: "100%",display:'flex',justifyContent:'space-around',flexWrap:'wrap',gap:'25px'}}>

          <Card sx={{ width: { xs: '90%', sm: '45%', md: '25%' },backgroundColor:'black', boxShadow: "0 0 30px 0 rgba(255, 255, 255, 0.9)",borderRadius:'30px'}}>

            <CardHeader title={`${'\u{1F60E}'} Frontend Tools ${'\u{1F60E}'}`} titleTypographyProps={{ 
               sx: { 
                      fontSize: '1.5rem',  
                      fontWeight: 'bold',  
                      color: 'black', 
                      textAlign:'center',
                      backgroundColor:'#f4fffd',
                      borderRadius:'25px'
                      
                      
                   }
               }}
            />


           

            <CardContent sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>


             <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white" alt="" style={{display:'block',marginBottom:'10px',width:'45%',borderRadius:'25px'}}></img>

             <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=flat-square&logo=css3&logoColor=white" alt="" style={{display:'block',marginBottom:'10px',width:'45%',borderRadius:'25px'}}></img>

             <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E" alt="" style={{display:'block',marginBottom:'10px',width:'45%',borderRadius:'25px'}}></img>

             <img src="https://img.shields.io/badge/react-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB" alt='' style={{display:'block',marginBottom:'10px',width:'45%',borderRadius:'25px'}} ></img>

             <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=flat-square&logo=redux&logoColor=white" alt='' style={{display:'block',marginBottom:'10px',width:'45%',borderRadius:'25px'}} ></img>
             
             <img src="https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white" alt='' style={{display:'block',marginBottom:'10px',width:'45%',borderRadius:'25px'}} ></img>
            
             <img src="https://img.shields.io/badge/bootstrap-%238511FA.svg?style=flat-square&logo=bootstrap&logoColor=white" alt='' style={{display:'block',marginBottom:'10px',width:'45%',borderRadius:'25px'}} ></img>

             <img src=" https://img.shields.io/badge/MUI-%230081CB.svg?style=flat-square&logo=mui&logoColor=white" alt='' style={{display:'block',width:'45%',borderRadius:'25px'}} ></img>


            </CardContent>

          </Card>


          <Card sx={{ width: { xs: '90%', sm: '45%', md: '25%' },backgroundColor:'black', boxShadow: "0 0 30px 0 rgba(255, 255, 255, 0.9)",borderRadius:'30px'}}>

              <CardHeader title={`${'\u{1F60E}'}Backend Tools ${'\u{1F60E}'}`}  titleTypographyProps={{ 
                  sx: { 
                          fontSize: '1.5rem',  
                          fontWeight: 'bold',  
                          color: 'black', 
                          textAlign:'center',
                          backgroundColor:'#f4fffd',
                          borderRadius:'25px'
                         
                          
                      }
                  }}
                />

              <CardContent sx={{display:'flex',flexDirection:'column',alignItems:'center'}} >

             


              <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=flat-square&logo=express&logoColor=%2361DAFB" alt="" style={{display:'block',marginBottom:'20px',width:'45%',borderRadius:'25px'}}></img>

              <img src="https://img.shields.io/badge/Socket.io-black?style=flat-square&logo=socket.io&badgeColor=010101" alt="" style={{display:'block',marginBottom:'20px',width:'45%',borderRadius:'25px'}}></img>

              <img src="https://img.shields.io/badge/JWT-black?style=flat-square&logo=JSON%20web%20tokens" alt="" style={{display:'block',marginBottom:'20px',width:'45%',borderRadius:'25px'}}></img>

              <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat-square&logo=mongodb&logoColor=white" alt='' style={{display:'block',marginBottom:'20px',width:'45%',borderRadius:'25px'}} ></img>

              <img src="https://img.shields.io/badge/mysql-4479A1.svg?style=flat-square&logo=mysql&logoColor=white" alt='' style={{display:'block',marginBottom:'20px',width:'45%',borderRadius:'25px'}} ></img>
              
              <img src="https://img.shields.io/badge/Prisma-3982CE?style=flat-square&logo=Prisma&logoColor=white" alt='' style={{display:'block',marginBottom:'20px',width:'45%',borderRadius:'25px'}} ></img>

              <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white" alt='' style={{display:'block',marginBottom:'10px',width:'45%',borderRadius:'25px'}} ></img>

            
   
              </CardContent>

          </Card>

          <Card sx={{ width: { xs: '90%', sm: '45%', md: '25%' },backgroundColor:'black', boxShadow: "0 0 30px 0 rgba(255, 255, 255, 0.9)",borderRadius:'30px'}}>

          <CardHeader title={`${'\u{1F60E}'} Languages ${'\u{1F60E}'}`}  titleTypographyProps={{ 
                  sx: { 
                          fontSize: '1.5rem',  
                          fontWeight: 'bold',  
                          color: 'black', 
                          textAlign:'center',
                          backgroundColor:'#f4fffd',
                          borderRadius:'25px',
                          
                          width:'100%'
                          
                      }
                  }}
          />

            

            <CardContent sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>

             
            <img src="https://img.shields.io/badge/c-%2300599C.svg?style=flat-square&logo=c&logoColor=white" alt="" style={{display:'block',marginBottom:'10px',width:'45%',borderRadius:'25px'}}></img>

            <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=flat-square&logo=openjdk&logoColor=white" alt="" style={{display:'block',marginBottom:'10px',width:'45%',borderRadius:'25px'}}></img>

            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E" alt="" style={{display:'block',marginBottom:'10px',width:'45%',borderRadius:'25px'}}></img>

            <img src="https://img.shields.io/badge/python-3670A0?style=flat-square&logo=python&logoColor=ffdd54" alt='' style={{display:'block',marginBottom:'10px',width:'45%',borderRadius:'25px'}} ></img>

           

            

            </CardContent>

        </Card>

        </Box>

      </Box>
      {/* ---------------------------------------------------------------------------------------------------------------------------------------------- */}




      {/* ------------------------------------------------Project Section------------------------------------------------------------------------ */}

      <Box  ref={projectsRef} sx={{marginTop: "50px", width: "100%",padding:'10px' }}>
        <Project  ref={projectsRef}/>
      </Box>  


      {/* ---------------------------------------------------------------------Contact form------------------------------------------------------- */}


      <Box ref={contactRef} sx={{marginTop: "50px", width: "100%",padding:'10px'}} >

        <Contact/>

      </Box>

      {/* ---------------------------------------------------------------------------------------------------------------------------------- */}



    </Box>
  );

};

export default Portfolio;
