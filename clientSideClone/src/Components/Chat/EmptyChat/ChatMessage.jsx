import React, { useContext, useState, useEffect, useRef } from 'react';

import { Box, styled } from '@mui/material';
import { AccountContext } from '../../../contexts/AccountProvider';
import Footer from './Footer';
import { getMessages, newMessage } from '../../../Service/Api';
import Message from './Message';
import { io } from 'socket.io-client';

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;



const Component = styled(Box)`
    height: 81vh;
    overflow-y: scroll;
`;

const Container = styled(Box)`
    padding: 1px 80px;
`;
export default function ChatMessage({ person, conversation }) {
  const { account, socket, setMessageFlag,newMessageFlag, } = useContext(AccountContext);
  const [value, setValue] = useState();
  const [messages, setMessage] = useState([]);
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const [inComingMessage, setInComingMessage] = useState(null)
  const scrollRef = useRef();

  useEffect(() => {
    socket.current.on('getMessage', data => {
        setInComingMessage({
            ...data,
            createdAt: Date.now()
        })
    })
}, []);

  useEffect(() => {
    const getMessageDetail = async () => {
      let data = await getMessages(conversation._id);
      // console.log(data);
      setMessage(data);
    }
    conversation._id && getMessageDetail();
  }, [person._id, conversation._id, newMessageFlag])

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [messages])

 
  useEffect(() => {
    if(inComingMessage && conversation?.members?.includes(inComingMessage.senderId)) { 
        setMessage((prev) => [...prev, inComingMessage])
    }
      }, 
        [inComingMessage, conversation]);

  const sendText = async (e) => {
    const code = e.keyCode || e.which;

    if (code === 13) {
      let message = {}
      if (!file) {

        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: 'text',
          text: value,
        };
      }
      else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: 'file',
          text: image,
        };
      }

      socket.current.emit('sendMessage', message);
      //console.log(message);
      await newMessage(message);

      setValue('');
      setFile('');
      setImage('');
      setMessageFlag(prev => !prev);

    }
  };

  return (
    <Wrapper>
      <Component>
        {
          messages && messages.map(message => (
            <Container ref={scrollRef}>
              <Message message={message} />
            </Container>

          ))
        }
      </Component>

      <Footer sendText={sendText} setValue={setValue}
        value={value}
        file={file} setFile={setFile}
        setImage={setImage} />

    </Wrapper>
  );
}
