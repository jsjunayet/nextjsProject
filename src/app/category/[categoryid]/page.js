import { querydata } from '@/component/ui/getcateory';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const page = async({searchParams}) => {
    const category = searchParams.category;
    const newcategoryies = await querydata(category)
    
   
    return (
       <Box sx={{mt:2}}>
        <Grid>
            <Grid item sx={2}>
        {
            newcategoryies.data?.map((item)=><Box key={item?._id}>
                <Typography>{item?.category}</Typography>

            </Box>)
        }
        </Grid>
        </Grid>
       </Box>
    );
};

export default page;