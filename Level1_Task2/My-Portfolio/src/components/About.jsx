import React, { useEffect, useState } from 'react'
import { Typography,Box } from '@mui/material'

const About = () => {
     

    // const[quote,setquote]= useState('Fetching Quote...')
    // const[authorname,setname]= useState('')

    // useEffect(()=>{

    //     function fetchingquote()
    //     {
    //         try{

    //             fetch('https://api.quotable.io/random')
    //              .then(response=>response.json())
    //              .then(data=>{
    //                console.log(data.content)
    //                setquote(data.content)
    //                setname(data.author)
    //              })

    //         }catch(err)
    //         {
    //             console.log(err)
    //         }
    //     }

    //     fetchingquote()

    //     const intervalId= setInterval(fetchingquote,9000)

    //     return () => clearInterval(intervalId);



    // },[])

    
    // console.log("hello")
    const start='</'
    const end= '>'

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
          About me

        </Typography>


        <Box sx={{width:'100%',marginLeft:'auto',marginRight:'auto',display:'flex',justifyContent:'center',}} >
            

          <Typography sx={{color:'whitesmoke',width:{xs: '95%', md: '45%', lg: '45%'},border:'3px solid white',fontSize:'25px', background: "linear-gradient(to left, #f44336, #4567b7, #8f0a1a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",fontWeight:'bold',
              borderRadius:'30px',
              boxShadow: "0 0 20px 0 rgba(255, 255, 255, 0.9)",
              padding: '20px',
              whiteSpace: 'wrap'
              

              }}>

               {start} Purshuing Computer Science in Artificial Intelligence From GITA Autonomous College Bhubaneswar.
                Newbie in the feild of Web technologies everyday solving new bugs in life and moving forward .I am  passionate and hungry of learning new technologies everyday{end}

          </Typography>

      
        </Box>  

         



        
            
   </>
  )
}

export default About