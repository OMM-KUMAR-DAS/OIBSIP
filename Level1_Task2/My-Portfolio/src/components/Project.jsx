import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography,Button,Box} from '@mui/material';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Project = () => {
  const projects = [

    { title: "Foodizz",
      imag:'https://cdn.wallpapersafari.com/2/85/oUPDhX.jpg',
      link:'https://github.com/OMM-KUMAR-DAS/Foodizz'
    },

    {
      title:"Chatify",
      imag:'https://files.ably.io/ghost/prod/2023/01/build-a-realtime-chat-app-from-scratch--1-.png',
      link:'https://github.com/OMM-KUMAR-DAS/Welcome_to_ChatiFy'
    },

    {
      title:'Bmi Calculator',
      imag:'https://thedaily9.in/wp-content/uploads/2023/01/unnamed.png',
      link:'https://bmi-jade-ten.vercel.app/'
    },

    {
        title:'Gif Generator',
        imag:'https://i0.wp.com/www.alphr.com/wp-content/uploads/2023/10/gif.jpg?fit=680%2C383&ssl=1',
        link:'https://gif-3upa.vercel.app/'
    },

    {
        title:'QR Code Generator',
        imag:'https://orderific.com/images/shape/ribbon_qr_code.png',
        link:'https://qr-generator-dusky.vercel.app/'
    },

    {
      title:'Capcha Generator',
      imag:'https://dz2cdn1.dzone.com/storage/article-thumb/15963286-thumb.jpg',
      link:'https://capcha-generator-bm9x.vercel.app/'
    },

    {
        title:'Stock Indexs',
        imag:'https://w0.peakpx.com/wallpaper/539/789/HD-wallpaper-chart-cash-money-stock-market-wall-street.jpg',
        link:'https://stock-data-bfsl.vercel.app/'
    }


  ];



  return (
        

    <>

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
            marginBottom:'60px',

            boxShadow: "0 0 20px 0 rgba(255, 255, 255, 0.9)",
            "@media (max-width:600px)": {
              width: "50%",
              padding: "5px",
            },
          }}
        >
          My Projects

        </Typography>
                
    
                <Box sx={{ width: "100%",height:'100%',display:'flex',justifyContent:'space-around',flexWrap:'wrap',gap:'25px'}}>

                {projects.map((project, index) => (

                    <Card key={index} sx={{ width: { xs: '95%', sm: '45%', md: '25%' },backgroundColor:'black', boxShadow: "0 0 30px 0 rgba(255, 255, 255, 0.9)",borderRadius:'30px',
                    transition:'transform 0.5s ease-in-out',
                    "&:hover": {
                        
                        transform: "scale(1.1)",
                       
                      },
                    }}>

                    <CardContent>
                        <Typography variant="h5" sx={{textAlign:'center',color:'whitesmoke',fontWeight:'bold'}}>{project.title}</Typography>
                    </CardContent>

                    <CardMedia 
                    
                    component="img"
                    height="250"
                    image={project.imag}
                    alt="Foodizz"
                        

                    />

                    <CardActions sx={{display:'flex',justifyContent:'center'}}>

                        <a href={project.link} target='_blank'>
                            
                        <Button  endIcon={<OpenInNewIcon/>} sx={{ marginTop:'15px',
                        boxShadow: "0 0 10px 0 rgba(255, 255, 255, 0.9)",
                        borderRadius: "25px",
                        color:'whitesmoke'

                      }}>Click me</Button></a>

                    </CardActions>

                    

                    </Card>

                
                ))}

                </Box>
    </>

  );
}

export default Project;
