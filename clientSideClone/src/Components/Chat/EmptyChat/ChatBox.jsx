import { Box } from '@mui/material'
import {useContext, useEffect,useState} from 'react'
import ChatHeader from './ChatHeader'
import ChatMessage from './ChatMessage'
import { AccountContext } from '../../../contexts/AccountProvider'
import { getConversation } from '../../../Service/Api.js'



export default function ChatBox() {
  const {person,account} = useContext(AccountContext)
  const [conversation , setConversation]=useState({})
  useEffect(()=>{
    const getConversationDetails=async()=>{
      let data=await getConversation({senderId:account.sub,receiverId:person.sub});
      console.log(data);
      setConversation(data);
    }
    getConversationDetails()
  },[person.sub]);

  return (
    <Box style={{ height: '75%'}}>
    <ChatHeader  person={person}/>
    <ChatMessage  person={person} conversation={conversation}/>
    </Box>
  )
}
