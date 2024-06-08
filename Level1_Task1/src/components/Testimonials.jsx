
import React from 'react';
import { Grid, Typography, Box,Card,CardContent,CardMedia } from '@mui/material';
import Rating from '@mui/material/Rating';

// const testimonials = [
//   { name: 'John Doe', feedback: 'These shoes are amazing for basketball! I love them!' },
//   { name: 'Jane Smith', feedback: 'The best running shoes I have ever owned. Highly recommend!' },
// ];

const Testimonials = () => {
  return (
    <Box py={5}>

     
        <Typography variant="h4" align="center" gutterBottom>
          Testimonials
        </Typography>

        <Grid container spacing={4} sx={{ justifyContent: 'center',marginTop:'25px' }}>


        <Grid item xs={12} sm={6} md={4}>


          <Card sx={{borderRadius:'25px',boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.5)',maxWidth:400}}>

            <CardMedia
              component="img"
              height="200"
              image="https://www.shutterstock.com/shutterstock/photos/2076784435/display_1500/stock-photo-sports-high-top-sneakers-d-render-2076784435.jpg"
              alt="Sports Shoes"
            />

            <CardContent>


              <Typography gutterBottom variant="h5">
                "The best sports shoes I’ve ever owned!"
              </Typography>

              <Rating name="read-only" value={5} readOnly />

              <Typography variant="body2" color="text.secondary">
                - Jane D.
              </Typography>

            </CardContent>

          </Card>

        </Grid>

        <Grid item xs={12} sm={6} md={4}>

          <Card sx={{borderRadius:'25px',boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.5)',maxWidth:400}}>

            <CardMedia
              component="img"
              height="200"
              image="https://www.shutterstock.com/shutterstock/photos/1891273006/display_1500/stock-photo-a-pair-of-shoes-footwear-concept-d-rendering-1891273006.jpg"
              alt="Sports Shoes"
            />

            <CardContent>

              <Typography gutterBottom variant="h5" component="div">
                "Incredibly comfortable and stylish."
              </Typography>

              <Rating name="read-only" value={4} readOnly />

              <Typography variant="body2" color="text.secondary">
                - John S.
              </Typography>

            </CardContent>

          </Card>

        </Grid>

      </Grid>
      
    </Box>
  );
};

export default Testimonials;
