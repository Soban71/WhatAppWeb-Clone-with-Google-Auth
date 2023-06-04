import { useState,useContext,useEffect } from 'react';
import {getUsers} from '../../../Service/Api'
import { Box  , styled , Divider } from '@mui/material';
import Conversion from './Conversion';
import {AccountContext}  from '../../../contexts/AccountProvider'

const Components=styled(Box)`
height: 70vh;
overflow: overlay;
`
const StyleDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background: #e9edef;
  opacity: .6;
`;


export default function Conversions({text}) {
    const [users , setUser]=useState([])
    const {account, socket,setActiveUser}=useContext(AccountContext);
    

    useEffect(()=>{
        const fetchData=async()=>{
            let response = await getUsers();
            const textAsString = String(text);
            
          //  const Filter = response.filter(user => user.name.toLowerCase().includes(textAsString.toLowerCase()));
            setUser(response)
        }
        fetchData();
    },[]);
    useEffect(()=>{
      socket.current.emit('addUsers',account);
      socket.current.on('getUsers',users=>{
        setActiveUser(users);
      })
    },[account]);
  return (
    <Components>
        {
            users.map(user =>(
                user.sub !== account.sub &&

                <>
                <Conversion user={user} />
                <StyleDivider />
                </>
                
            ))   
        }
    </Components>
  )
}
