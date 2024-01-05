import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import img1 from "../assets/2150497252[1].jpg"

const Leatest = () => {
    return (
        <div>
            <Box className="my-3">
    <Card>
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
    <Box className="my-3">
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
  <Grid item xs={6}>
  <Card>
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
  <Grid item xs={6}>
  <Card>
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
  <Grid item xs={6}>
  <Card>
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
  <Grid item xs={6}>
  <Card>
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
    </Box>
    </Box>
        </div>
    );
};

export default Leatest;