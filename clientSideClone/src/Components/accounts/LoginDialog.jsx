import React from 'react'
import { Dialog ,Box , Typography,List, ListItem} from '@mui/material'
import { qrCodeImage } from '../../constants/data'
import styled from '@emotion/styled'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode"; 
import { useContext } from 'react';
import { AccountContext } from '../../contexts/AccountProvider';
import { addUser } from '../../Service/Api';

const dialogStyle={
height: '90%',
marginTop: '8%',
width : '65%',
maxWidth: '100%',
maxheight: '110%',
boxShadow: "none",
overFlow: "hidden"
}
const Components=styled(Box)
`
display: flex;
`

const Container=styled(Box)`
padding : 56px 0px 56px 56px;
`

const QRCode=styled('img')({
  height:265,
  width:265,
  margin: "50px 0px 0px 50px"
})

const Tittle=styled(Typography)`
font-size:26px;
color: #454545;
font-weight:300;
font-family: inherit;
margin-bottom:25px;
`
const ListStyle=styled(List)`
& > li {
  margin-top:15px;
  font-size: 16px;
  padding: 0;
  line-height:28px;
  color: #4a4a4a;
}
`
export default function LoginDialog() {

const {setAccount}=useContext(AccountContext);

  const onSuccessLogin=async(res)=>{
   const Decoded=jwt_decode(res.credential);
   console.log(Decoded);
   setAccount(Decoded);
   await addUser(Decoded);
  }

  const onErrorLogin=(res)=>{
  console.log("Login Failed: ",res);
  }
  return (
    <Dialog  open={true}
    PaperProps={{sx : dialogStyle}}
    hideBackdrop={true}
    >

    <Components>


    <Container>
    <Tittle>To USE WhatsApp on your computer</Tittle>
    <ListStyle>
    <ListItem>1. Open WhatsApp on your Phone</ListItem>
    <ListItem>2. Tap Menu Setting and Select WhatsApp Web</ListItem>
    <ListItem>3. Point your phone to this screen to capture QR Code</ListItem>
    </ListStyle>

    </Container>

    <Box style={{position:'relative'}}>
    <QRCode   src={qrCodeImage}  alt='Bar code'/>
    <Box style={{position:'absolute' , top:'50%',transform:'translateX(25%)'}}>
    <GoogleLogin 
    onSuccess={onSuccessLogin}
    onError={onErrorLogin}
    />
    </Box>
    </Box>


    </Components>
    
    
    </Dialog>
  )
}
