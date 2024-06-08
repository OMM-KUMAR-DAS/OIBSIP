import React from 'react';
import Lottie from 'lottie-react';
import { Box } from '@mui/material';
import animationData from "../assets/f1z3pFJWNn (1).json";




const Contact = () => {
  return (
    <>

     
  <Box sx={{width:'25%',boxShadow: "0 0 30px 0 rgba(255, 255, 255, 0.9)",borderRadius:'25px',marginLeft:'auto',marginRight:'auto',padding:'10px',
     '@media (max-width:700px)':{
       width:'50%'
     }
  }}>

      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWgLFc-Y2WHECQ6tM1o0HOVm6_oBP68jD2NXu8SWhAyJM-Og/viewform?usp=sf_link" target='_blank'>
 


               
                   <Lottie
                  
                  animationData={animationData} 
                  loop={true} 
               
                   />


              
               
       

      </a>

  </Box>

        
        
    
    



       
      
    </>
  );
};

export default Contact;
