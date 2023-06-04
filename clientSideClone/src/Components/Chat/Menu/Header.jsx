import React from 'react'
import { Box } from '@mui/material'
import { useContext } from 'react'
import { AccountContext } from '../../../contexts/AccountProvider'
import styled from '@emotion/styled';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';
import InfoDrawer from '../../drawer/infoDrawer';
//icons
import ChatIcon  from '@mui/icons-material/Chat';



//styled component

const Component=styled(Box)`
height :40px;
background:#ededed;
padding: 8px 16px;
display:flex;
align-items:center;
`

const Wrapper=styled(Box)`
margin-left:auto;
& > * {
    margin-left: 2px;
    padding : 8px;
    color:black;
};
& :first-child {
font-size:22px;
margin-right:8px;
margin-top:3px;
}
`


const Image=styled('img')({
    height:40,
    width:40,
    borderRadius: "50%"
})

export default function Header() {

    const {account}=useContext(AccountContext)

    const [openDrawer,setOpenDrawer]=useState(false);


    const ToggleHandle=()=>{
      setOpenDrawer(true);
    }

  return (
   <>
    <Component>
    <Image src={ account.picture }  alt='no pic' onClick={ToggleHandle}/>
    <Wrapper>
    <ChatIcon />
    <HeaderMenu  setOpenDrawer={setOpenDrawer}/>
    </Wrapper>
    </Component>
    <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
    
  )
}
