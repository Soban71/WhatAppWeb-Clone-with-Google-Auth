import React from 'react'
import {AppBar,Toolbar,Box} from "@mui/material"
import styled from '@emotion/styled'
import LoginDialog from './accounts/LoginDialog'
import { useContext } from 'react';
import Chat from './Chat/chat';
import { AccountContext } from '../contexts/AccountProvider';



const Component=styled(Box)`
background-color: #DBDFEA;
height: 50vh;
`
const LoginHeader=styled(AppBar)`
background-color: #59CE8F;
height: 105px;
box-shadow: none;
`
const Header=styled(AppBar)`
background-color: #59CE8F;
height: 220px;
box-shadow: none;
`

export default function Messanger(){
  
  const {account}=useContext(AccountContext);
  return (
    <Component>
    {
      account ? 
      <>
      <LoginHeader>
      <Toolbar>
      
      </Toolbar>
      </LoginHeader>
      <Chat/>
      
      </>
      
      
      :
      <>
      <Header>
      <Toolbar>
      
      </Toolbar>
      </Header>
      <LoginDialog />
      </>
    }
   
    </Component>

    

    
  )
}
