import { Box, Typography , styled } from '@mui/material'
import  {useContext , react}  from 'react'
import {Search , MoreVert} from '@mui/icons-material'
import {AccountContext} from '../../../contexts/AccountProvider'


//Styling
const Header=styled(Box)`
height: 50px;
max-height:60px;
background: #ededed;
padding: 6px 12px;
display: flex;
align-items: center;
overflow-y:none;
`
const Image=styled('img')({
    height: 35,
    width:35,
    objectFit: 'cover',
    borderRadius: '50% '
})

const Name=styled(Typography)
`
margin-left:12px !important;
`
const Status=styled(Typography)`
font-size:12px;
margin-left:12px !important;
color:rgb(0,0,0.6);
`

const RightContainer=styled(Box)`
margin-left: auto;
& > svg {
    padding: 3px;
    font-size: 22px;
    color: rgba(0,0,0,0.6);
}

`
export default function ChatHeader({person}) {

  const {activeUser}=useContext(AccountContext);

  return (
    <Header>
    <Image src={person.picture} alt='no dp'/>
    <Box>
    <Name>{person.name}</Name>
    <Status>{activeUser?.find(user=>user.sub===person.sub) ? 'Online': 'Offline'}</Status>
    </Box>


    <RightContainer>
    <Search />
    <MoreVert />
    </RightContainer>



    </Header>
  )
}
