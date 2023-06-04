import {useContext} from 'react';
import { Box, Typography } from '@mui/material';
import {AccountContext} from  '../../contexts/AccountProvider';
import styled from '@emotion/styled';


//styling
const ImageContainer=styled(Box)`
display : flex;
justify-content: center;
`
const Image=styled('img')({
    width : 150,
    height : 150,
    borderRadius: '50%',
    padding: '25px  0px' 
})

const BoxWrapper=styled(Box)`
background: white;
padding:12px 30px 2px; 
box-Shadow:0px 1px 3px rgba(0,0,0,0.08);
& :first-child{
    font-size:13px;
    color: #009668;
    font-weight: 200;
}
& :last-child{
    margin: 13px 0px;
    color: #4A4A4A
}
`
const DescritionContainer=styled(Box)`
padding: 15px 20px 20px 30px;

& :first-child{
    font-size:13px;
    color: #8696a0;
}
`
export default function Profile() {
   const {account}=useContext(AccountContext);

  return (
    <>
<ImageContainer>
<Image src={account.picture} alt='Not Found'/>
</ImageContainer>

<BoxWrapper>
<Typography>Your Name</Typography>
<Typography>{account.name}</Typography>
</BoxWrapper>


<DescritionContainer>
<Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
</DescritionContainer>

<BoxWrapper>
<Typography>About</Typography>
<Typography>Eat! Sleep! Code! Repeat!</Typography>
</BoxWrapper>
    </>
  )
}
