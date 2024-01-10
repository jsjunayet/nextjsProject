import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import img1 from "../assets/2150497252[1].jpg"
import { alldata } from './getcateory';

const Leatest = async() => {
            const alldatas =await alldata()
            const data = alldatas.data
            console.log(data);
    return (
        <div>
            <Box className="my-3">
    <Card>
      <CardActionArea>
        <CardMedia>
        <Image src={data[0]. image_url} alt='img0'  height={400} width={900}></Image>
        </CardMedia>
        <CardContent>
          <p className='p-2 w-32 rounded bg-purple-700'>{data[0].category}</p>
          <Typography gutterBottom >
            {data[0].title}
          </Typography>
          <Typography gutterBottom>
            By Junayet Shiblu -jan 4 2024
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {data[0].details.length>200? data[0].details.slice(0 ,200)+".....":data[0].details}

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Box className="my-3">
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
  {
    data.slice(0,4).map((item)=>
      <Grid item key={item._id} xs={6} >
  <Card sx={{height:"100%"}}>
      <CardActionArea>
        <CardMedia>
        <Image src={item. image_url} alt='img0'  height={300} width={450}></Image>
        </CardMedia>
        <CardContent>
          <p className='p-2 w-32 rounded bg-purple-700'>Technology</p>
          <Typography gutterBottom >
            {item.title}
          </Typography>
          <Typography gutterBottom>
            {item.author.name} -{item.author.published_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {item.details.length>200? item.details.slice(0 ,200)+".....":item.details}

          </Typography>
        </CardContent>
      </CardActionArea>
  </Card>
  </Grid>
    )
  }
  
</Grid>
    </Box>
    </Box>
        </div>
    );
};

export default Leatest;