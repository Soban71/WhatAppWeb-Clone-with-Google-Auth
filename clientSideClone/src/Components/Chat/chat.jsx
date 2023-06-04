import { useContext } from 'react'
import { AccountContext } from '../../contexts/AccountProvider'
import { Dialog,Box } from '@mui/material'
import Menu from "./Menu/Menu"
import styled from '@emotion/styled'
import ChatBox from './EmptyChat/ChatBox'
import Emptychat from './EmptyChat/Emptychat'



//Styled Components

  const dialogStyle = {
    height: '100%',
    width: '100%',
    margin: '0px',
    maxWidth: '100%',
    borderRadius: 0,
    maxHeight: '100%',
    boxShadow: 'none',
  };
  

  const Component=styled(Box)`
  display: flex;
  `
  
  const LeftComponent=styled(Box)`
  min-width:370px;
  `

  const RightComponent=styled(Box) `
  width:180%;
  min-width:300px;
  border-left:1px solid rgba(0,0,0,0.13)
  `

export default function Chat() {
  const {person}=useContext(AccountContext)
  return (
   <>
   <Dialog
    open={true}
    PaperProps={{sx : dialogStyle}}
    hideBackdrop={true}
    maxWidth={'md'}
    >
    <Component>
    <LeftComponent>
    <Menu />
    </LeftComponent>

    <RightComponent>
    {Object.keys(person).length ?<ChatBox/> : <Emptychat/> }
    </RightComponent>
    




    </Component>
    </Dialog>
   </>
  )
}






