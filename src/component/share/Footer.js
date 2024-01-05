import { Box, Button, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    const pages = [
        {
            pathname:'/',
            route:"Home"
        },
        {
            pathname:'/pages',
            route:"Pages"
        },
        {
            pathname:'/category',
            route:"Category"
        },
        {
            pathname:'/news',
            route:"News"
        },
        {
            pathname:'/post',
            route:"Post"
        },
        {
            pathname:'/contact',
            route:"Contact"
        },
    ]

    return (
        <Box className="p-4 bg-black text-center">
            <Box sx={{
                "& svg": {
                    color: "white",
                    fontSize: "40px"
                },
            }}>
            <IconButton>
                <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
                <TwitterIcon></TwitterIcon>
            </IconButton>
            <IconButton>
                <YouTubeIcon></YouTubeIcon>
            </IconButton>
            <IconButton>
                <LinkedInIcon></LinkedInIcon>
            </IconButton>
            <IconButton>
                <InstagramIcon></InstagramIcon>
            </IconButton>
            </Box>
        <Box  className="text-center text-white">
            {
                pages.map((page)=><Link className='text-white' key={page} href={`${page.pathname}`}>
                <Button>{page.route}</Button>
                </Link>)
            }
        </Box>
        <Typography variant='body2' color="gray" textAlign="center">@2024 the Dragon new. Design by Junayet Shiblu</Typography>
        </Box>
    );
};

export default Footer;