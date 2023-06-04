import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import styled from '@emotion/styled';

const MenuOption=styled(MenuItem)
`
font-size:14px;
padding: 15px 60px 5px 24px;
color: #4A4A4A;
`

export default function HeaderMenu({setOpenDrawer}) {
    
    const [open , setOpen]=useState(null);

    const handleClose=()=>{
        setOpen(null)
    }

    const handleClick=(e)=>{
        setOpen(e.currentTarget);
    }

  return (
    <>
    <MoreVertIcon onClick={handleClick} />

    <Menu
    
    anchorEl={open}
    keepMounted
    open={open}
    onClose={handleClose}
    getContentAnchoreE1={null}
    anchorOrigin={{
        vertical:'bottom',
        horizontal: 'center'
    }}
    transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
    }}
  >
    <MenuOption onClick={()=>{handleClose(); setOpenDrawer(true)}}>Profile</MenuOption>
  
  </Menu>

    </>
  )
}
