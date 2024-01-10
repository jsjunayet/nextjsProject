import { singledata } from '@/component/ui/getcateory';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const page = async({params}) => {
    const single = await singledata(params.newid)
    const pagedata = single.data
    return (
        <Box sx={{m:2}}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Image src={pagedata.thumbnail_url} alt='img1' width={600} height={500} ></Image>
                    <Box sx={{mt:2}}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                        <Image src={pagedata. image_url} alt='img1' width={300} height={250} ></Image>
                        </Grid>
                        <Grid item xs={6}>
                        <Image src={pagedata. image_url} alt='img1' width={300} height={250} ></Image>
                        </Grid>
                    </Grid>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                

                    <Typography sx={{mb:2}} variant='h4'>{pagedata.title}</Typography>
                    <Avatar alt="Remy Sharp" src={pagedata.author.img} />
                    <Typography sx={{mb:2}}> {pagedata.author.name}-{pagedata.author.published_date}</Typography>
                    <Typography>{pagedata.details}</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default page;