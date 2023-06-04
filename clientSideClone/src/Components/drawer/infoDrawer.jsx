import React from 'react'
import { Box, Drawer, Typography } from '@mui/material'
import  ArrowBackIcon  from '@mui/icons-material/ArrowBack';
import styled from '@emotion/styled';
import Profile from './profile';



//styling
const drawerStyle={
    left:20,
    top :30,
    height:'90%',
    width:'35%',
    boxShadow: 'none'
}
const Header=styled(Box)`
background: #008069;
color:white;
height:80px;
display:flex;
& > svg , & > p{
    margin-top: auto;
    padding: 15px;
    font-weight:bold;

}
`
const Text=styled(Typography)`
font-size:18px;
`

const Component=styled(Box)`
background: #ededed;
height:85%
`


export default function infoDrawer({open , setOpen}) {
  return (
    <Drawer
    open={open}
    onClose={() => setOpen(false)}
    PaperProps={{sx : drawerStyle}}
    style={{ zIndex:1500 }}
    >
    
    <Header>
    <ArrowBackIcon  onClick={()=>setOpen(false)}/>
    <Text>Profile</Text>
    </Header>

    <Component>
    <Profile />
    </Component>
    </Drawer>
  )
}
