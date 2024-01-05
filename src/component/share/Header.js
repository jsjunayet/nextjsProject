import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import img from "../assets/logo.png"
import { getDate } from '../utilies/getDate';

const Header = () => {
    const date = getDate()
    return (
        <Box className="text-center my-4 space-y-3">
            <Image src={img} alt='dragon' width={300} height={300} className='mx-auto '></Image>
            <Typography color="gray">Journalism Without Fear or Favour</Typography>
            <Typography className='text-black'>{date}</Typography>
        </Box>
    );
};

export default Header;