import React from 'react'
import { Box , styled} from '@mui/material'
//Mui icons
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';

//Styling
const Component=styled(Box)`
background:#fff;
height: 45px;
border-bottom: 1px solid #F2F2F2;
display:flex;
align-items: center;
`
const Icon=styled(Box)`
position: Absolute;
height: 100%;
color: #919192;
padding: 6px 8px;
`

const InputField=styled(InputBase)`
width:100%;
padding:16px;
height:15px;
padding-left:65px;
font-size:14px;
`

const Wrapper=styled(Box)`
background: #f0f2f5;
position:relative;
margin: 0px 13px;
width:100%;
border-radius:10px;
`


export default function Search({setText}) {
  return (
    <Component>
          <Wrapper>

                  <Icon>
                <SearchIcon
                fontSize='small'
                />
                  </Icon>
                  <InputField 
                  placeholder='Search or start new chat'
                  onChange={(e)=>setText(e.target.value)}
                  />
          </Wrapper>


    </Component>
  )
}
