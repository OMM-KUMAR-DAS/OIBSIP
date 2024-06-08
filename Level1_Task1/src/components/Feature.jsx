// src/components/Features.js
import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import AirIcon from '@mui/icons-material/Air';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import BuildIcon from '@mui/icons-material/Build';
import TerrainIcon from '@mui/icons-material/Terrain';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import OpacityIcon from '@mui/icons-material/Opacity';
import StyleIcon from '@mui/icons-material/Style';
import AdjustIcon from '@mui/icons-material/Adjust';

const features = [

  { icon: <AirIcon fontSize="large" />, title: 'Breathability', description: 'Breathable mesh upper for enhanced ventilation.' },
  { icon: <FavoriteIcon fontSize="large" />, title: 'Comfort and Cushioning', description: 'Cushioned insole for maximum comfort during long runs.' },
  { icon: <FitnessCenterIcon fontSize="large" />, title: 'Support and Stability', description: 'Enhanced arch support for stability and injury prevention.' },
  { icon: <DirectionsRunIcon fontSize="large" />, title: 'Lightweight Design', description: 'Lightweight construction for speed and agility.' },
  { icon: <BuildIcon fontSize="large" />, title: 'Durability', description: 'Durable construction to handle tough workouts.' },
  { icon: <TerrainIcon fontSize="large" />, title: 'Traction', description: 'High-traction outsole for superior grip on all surfaces.' },
  { icon: <AccessAlarmIcon fontSize="large" />, title: 'Flexibility', description: 'Flexible sole to support natural foot movement.' },
  { icon: <OpacityIcon fontSize="large" />, title: 'Water Resistance', description: 'Water-resistant upper to keep your feet dry.' },
  { icon: <StyleIcon fontSize="large" />, title: 'Style and Aesthetics', description: 'Stylish design with multiple color options.' },
 
];

const Features = () => {
  return (
    <Box py={5} bgcolor="#f5f5f5">

    

        <Typography variant="h4" align="center" gutterBottom>
          Features
        </Typography>

        <Grid container spacing={4}>

          {features.map((feature, index) => (

            <Grid item xs={12} md={4} key={index} >

              <Box textAlign="center" >

                {feature.icon}

                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>

                <Typography>{feature.description}</Typography>

              </Box>

            </Grid>

          ))}

        </Grid>

      
    </Box>
  );
};

export default Features;
