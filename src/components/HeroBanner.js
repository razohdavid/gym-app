import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/home-page.png';

const HeroBanner = () => {
  return (
    <Box
     sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px' }
     }}
     position='relative'
     p='20px'
    >
        <Typography
            color='#FF2625'
            fontWeight='600'
            fontSize='50px'
        >
            Feel the Burn!
        </Typography>
        <Button
            variant='contained'
            color='error'
            href='#exercises'
            sx={{
                backgroundColor: '#FF2625',
                paddng: '10px',
            }}
        >
            Explore Exercises
        </Button>
        <Typography
            fontWeight={600}
            color='#FF2625'
            sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none' },
            }}
            fontSize='200px'
        >
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="banner" width='100%'/>
    </Box>
  )
}

export default HeroBanner
