import React from 'react';

import { Box, Button,IconButton,Typography} from '@mui/material';

import animationData2 from'../assets/Animation - 1717528942412.json';

import animationData3 from '../assets/Animation - 1717529528743.json';

import Lottie from 'lottie-react';




const CallToAction = () => {
  return (


    <Box sx={{ padding: '20px', textAlign: 'center', backgroundColor: '#f5f5f5' }}>


      <Typography variant="h4" gutterBottom>


        Experience the Ultimate Comfort and Performance

      </Typography>


      <Typography variant="h6" gutterBottom>
        With our latest collection of sports shoes
      </Typography>

     
   
 


      <IconButton
                        sx={{
                            width: {
                                xs: '75%', 
                                sm: '50%', 
                                md: '50%', 
                                lg: '30%', 
                                xl: '30%', 
                            },
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    >
                        <Lottie 
                            animationData={animationData2} 
                            loop={true}
                            autoplay={true}
                           
                           
                        />
        </IconButton>
    
      

      

      

      

      <Typography variant="h6" sx={{ margin: '20px 0',fontWeight:'bold' }}>
        Limited Time Offer
      </Typography>

      <Box
                        sx={{
                            width: {
                                xs: '75%', 
                                sm: '50%', 
                                md: '50%', 
                                lg: '30%', 
                                xl: '30%', 
                            },
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    >
                        <Lottie 
                            animationData={animationData3} 
                            loop={true}
                            autoplay={true}
                           
                           
                        />
        </Box>



      <Typography variant="body1" color="primary">
        Use code: SHOES20 at checkout.
      </Typography>

      <Box sx={{ marginTop: '20px' }}>

        <Button variant="outlined" color="secondary" sx={{ margin: '10px' }}>
          Learn More
        </Button>


        <Button variant="outlined" color="secondary" sx={{ margin: '10px' }}>
          Customize Your Shoes
        </Button>
      </Box>

      <Box sx={{ marginTop: '20px' }}>
        <Typography variant="body2" color="textSecondary">
          For support, contact us at support@sportshoes.com or call (123) 456-7890.
        </Typography>
      </Box>

    </Box>
  );
};

export default CallToAction;
