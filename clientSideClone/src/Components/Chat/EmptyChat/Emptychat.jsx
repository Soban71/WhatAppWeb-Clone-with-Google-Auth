import React from 'react'
import {EmptyChatImage} from '../../../constants/data.js'
import { Box, Typography , styled , Divider} from '@mui/material'

const Components=styled(Box)`
background: #f8f9fa;
padding: 30px 0px;
text-align: center;
height: 75vh;
`

const Containers=styled(Box)`
padding: 0 100px;
`

const Image=styled('img')({

  width: 400,

})

const Tittle=styled(Typography)`
font-size:28px;
margin: 25px 0px 10px 0px;
font-family: inherit;
font-weight:300;
color: #41525d;
`

const SubTittle=styled(Typography)`
font-size : 12px;
color: #667781;
font-weight:400;
font-family: inherit;
`
const StyleDivider=styled(Divider)`
margin: 40px 0px;
opacity:0.6;
`

export default function Emptychat() {
  return (
    <Components>
        <Containers>
             <Image src={EmptyChatImage} alt='No Img' />
             <Tittle>WhatsApp Web</Tittle>
             <SubTittle>Send and receive messages without keeping your phone online.</SubTittle>
             <SubTittle>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</SubTittle>
             <StyleDivider />
        </Containers>
    </Components>
  )
}
