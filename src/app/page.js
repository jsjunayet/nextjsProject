import React from 'react';
import Leatest from '@/component/ui/Leatest';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import img1 from "../component/assets/81395[1].jpg"

const Homepage = () => {
  return (
    <>
    <Grid container spacing={2}>
    <Grid item xs={8}>
      <Leatest></Leatest>
   </Grid>
  <Grid item xs={4}>
  <Card className=' my-3'>
      <CardActionArea>
        <CardMedia>
          <Image src={img1} alt='img1'></Image>
        </CardMedia>
        <CardContent>
          <p className='p-2 w-32 rounded bg-purple-700'>Technology</p>
          <Typography gutterBottom >
            This room is best and more effiently and more comfortable.
          </Typography>
          <Typography gutterBottom>
            By Junayet Shiblu -jan 4 2024
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
  </Card>
  <Card className=' my-3'>
      <CardActionArea>
        <CardMedia>
          <Image src={img1} alt='img1'></Image>
        </CardMedia>
        <CardContent>
          <p className='p-2 w-32 rounded bg-purple-700'>Technology</p>
          <Typography gutterBottom >
            This room is best and more effiently and more comfortable.
          </Typography>
          <Typography gutterBottom>
            By Junayet Shiblu -jan 4 2024
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
  </Card>
  <Card className=' my-3'>
      <CardActionArea>
        <CardMedia>
          <Image src={img1} alt='img1'></Image>
        </CardMedia>
        <CardContent>
          <p className='p-2 w-32 rounded bg-purple-700'>Technology</p>
          <Typography gutterBottom >
            This room is best and more effiently and more comfortable.
          </Typography>
          <Typography gutterBottom>
            By Junayet Shiblu -jan 4 2024
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
  </Card>
  </Grid>
</Grid>
    </>
  );
};

export default Homepage;