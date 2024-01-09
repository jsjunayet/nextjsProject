
import { querydata } from '@/component/ui/getcateory';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const page = async({searchParams}) => {
    const category = searchParams.category;
    const newcategoryies = await querydata(category)
    return (
        <Box sx={{ m: 2 }}>
        <Grid container spacing={2}>
          {
            newcategoryies.data?.map((item) => (
              <Grid item key={item?._id} xs={6}>
              
  <Card sx={{height:"100%"}}>
      <CardActionArea>
        <CardMedia sx={ {
                "& img":{
                    width: '100%',
                    height: "200px"
                } }
        }>
          <Image src={item.image_url} height={300} width={300}  alt='img1'></Image>
        </CardMedia>
        <CardContent>
          <p className='p-2 w-32 rounded bg-purple-700'>{item.category}</p>
          <Typography gutterBottom sx={{mt:1}}>
            {item.title}
          </Typography>
          <Typography gutterBottom>
            By Junayet Shiblu -jan 4 2024
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.details.length>200? item.details.slice(0 ,200)+".....":item.details}
          </Typography>
        </CardContent>
      </CardActionArea>
  </Card>

              </Grid>
            ))
          }
        </Grid>
      </Box>
    );
};

export default page;