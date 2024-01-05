import { getcategory } from '@/component/ui/getcateory';
import { Grid } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const layout = async({children}) => {
    const {data} = await getcategory()
    console.log(data)
    return (
        <div>
            <Grid spacing={2}>
                <Grid xs={3}>
                    {
                        data.map((item)=><Link key={item.id} href={`/category/${item.title}`}>{item.title}</Link>)
                    }
                </Grid>
                <Grid xs={9}>
                    {children}
                </Grid>

            </Grid>
            {children}
        </div>
    );
};

export default layout;