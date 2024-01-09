"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../assets/Group.png"
import { IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Header from './Header';
const Navbar = ()=> {
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
            pathname:'/category/news',
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
   <>
   <Header></Header>
    <AppBar position="static" className='bg-black'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Typography>
                <Image src={logo} alt='logo' height={130} width={140}></Image>
            </Typography>
          <Box className="w-full text-center">
            {pages.map((page) => (
              <Link key={page} href={page.pathname}>
                <Button className="text-white">{page.route}</Button>
              </Link>
            ))}
          </Box>
          <Box sx={{
            "& svg":{
                color:"white"
            }
          }}>
           <Stack direction="row">
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
           </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
   </>
  );
}
export default Navbar;