import React from 'react'
import Header from '../components/Header'
import Feature from '../components/Feature'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'
import ShoeCarousel from '../components/ShoeCarousel'


const UI = () => {

    // const headerRef= useRef(null)
    // const featureRef= useRef(null)
    // const testiRef= useRef(null)
    // const callRef= useRef(null)

  return (
    <>
      {/* <Box sx={{position:'sticky',top:'0px',marginBottom:'50px'}}> */}
             <Header/>
      {/* </Box> */}

      {/* <Box> */}
              <ShoeCarousel/>
       {/* </Box> */}


      {/* <Box> */}

             <Feature/>

      {/* </Box> */}

      {/* <Box> */}

             <Testimonials/>

      {/* </Box> */}
       
       {/* <Box> */}

              <CallToAction/>

       {/* </Box> */}

       
      
      
     
    
    
    </>
  )
}

export default UI