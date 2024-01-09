import { getcategory } from '@/component/ui/getcateory';
import { Box, Button, Grid, Stack } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const layout = async({children}) => {
    const {data} = await getcategory()
    console.log(data)
    return (
       
     <Box>
      <Grid container spacing={10}>
        <Grid item xs={3}>
            <Stack rowGap={1} sx={{mt:2.5}}>
          {
            data.map((item) => (
              <Button variant='outlined'  key={item.id}>
                <Link href={`/category/news?category=${item.title}`}>{item.title}</Link>
                </Button>
            ))}
            </Stack>
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </Box>
        
    );
};

export default layout;