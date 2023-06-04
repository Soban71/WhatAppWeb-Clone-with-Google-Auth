import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { AccountContext } from '../../../contexts/AccountProvider'
import { setConversation, getConversation } from '../../../Service/Api'
import { formatDate } from '../../../utils/common_utils'


const Components = styled(Box)`
display : flex;
height: 40px;
padding : 13px 0px;
cursor : pointer;
`

const Image = styled('img')({
  width: 40,
  height: 40,
  borderRadius: '50%',
  padding: '0px 14px',
  objectFit: 'cover'
})

const Text = styled(Typography)`
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
`;
const Container = styled(Box)`
    display: flex;
`;

const Timestamp = styled(Typography)`
    font-size: 12px;
    color: #00000099;
    margin-left: auto;
    margin-right: 20px;
`;

export default function Conversion({ user }) {
  const { SetPerson, account, newMessageFlag } = useContext(AccountContext)
  const [message, setMessage] = useState({})
  const getUser = async () => {
    SetPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub })
  }

  useEffect(() => {
    const getConversationDetail = async () => {
      const data = await getConversation({ senderId: account.sub, receiverId: user.sub })
      // setMessage({text: data?.message,timestamps:data?.updatedAt})
      setMessage({ text: data?.message, timestamps: data?.updatedAt })

    }
    getConversationDetail();


  }, [newMessageFlag])

  return (
    <Components onClick={getUser}>
      <Box>
        <Image src={user.picture} alt='dp' />
      </Box>
      <Box style={{width: '100%'}}>
        <Container>
          <Typography>{user.name}</Typography>
          {
            message?.text &&
            <Timestamp>{formatDate(message?.timestamps)}</Timestamp>
          }
        </Container>

        <Box>
        <Text>{message?.text?.includes('localhost') ? 'media' : message.text}</Text>
        </Box>
      </Box>
    </Components>
  )
}
