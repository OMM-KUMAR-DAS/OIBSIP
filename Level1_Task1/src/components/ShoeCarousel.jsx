import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Typography, CardMedia } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const shoes = [
  {
    id: 1,
    name: 'Running Shoe',
    description: 'Comfortable and lightweight running shoe.',
    image: 'https://www.sneakersnstuff.com/images/7436/large/82612.jpg'
  },
  {
    id: 2,
    name: 'Basketball Shoe',
    description: 'High performance basketball shoe for the court.',
    image: 'https://www.sneakers.fr/wp-content/uploads/2008/03/ZXFAMILY1.jpg'
  },
  {
    id: 3,
    name: 'Casual Sneaker',
    description: 'Stylish and versatile casual sneaker.',
    image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F05%2Fadidas-zx-750-glory-red-fv8489-release-1.jpg'
  },
  {
    id: 4,
    name: 'Soccer Cleat',
    description: 'Durable and comfortable soccer cleats.',
    image: 'https://bdgastore.com/cdn/shop/products/Adidas-X-ATMOS-ZX-8000-SGREEN-CBLACK-SUPCOL-FX8593_1_grande.jpg?v=1599052442'
  },
  {
    id: 5,
    name: 'Hiking Boot',
    description: 'Rugged and waterproof hiking boots.',
    image: 'https://sneakernews.com/wp-content/uploads/2019/12/adidas-ZX-8000-OG-Aqua-EG8784-3.jpg?w=1140'
  }
];

const ShoeCarousel = () => {
  return (
    <Container

      style={{
        marginBottom: '30px',
        padding: '25px',
        backgroundColor: '#eff7f6',
        marginTop: '50px',
        width: '100%'
      }}

    >
      <Carousel

        interval={2000}
        controls={true}
        
        fade={true}
        prevIcon={<ArrowBackIosIcon style={{ color: 'black', fontSize: '30px' }} />}
        nextIcon={<ArrowForwardIosIcon style={{ color: 'black', fontSize: '30px' }} />}

      >

        {shoes.map((shoe) => (

          <Carousel.Item key={shoe.id}>

            <Card

              style={{
                textAlign: 'center',
                padding: '20px',
                margin: '0 auto',
                width: '100%',
                maxWidth: '345px',
              }}

            >
              <CardMedia
                component="img"
                height="200"
                image={shoe.image}
                alt={shoe.name}
                style={{
                  objectFit: 'contain',
                  width: '100%',
                  maxHeight: '200px',
                }}

              />

              <Typography variant="h6" component="div" style={{ marginTop: '10px' }}>
                {shoe.name}
              </Typography>

              <Typography variant="body2" sx={{color:'black',marginBottom:'10px'}}>
                {shoe.description}
              </Typography>

            </Card>

          </Carousel.Item>

        ))}

      </Carousel>

    </Container>
  );
};

export default ShoeCarousel;
