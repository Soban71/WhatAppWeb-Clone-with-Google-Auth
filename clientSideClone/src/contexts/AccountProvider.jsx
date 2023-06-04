import React from 'react'
import { createContext , useRef , useEffect} from 'react';
import { useState } from 'react';
import { io } from 'socket.io-client';



export const AccountContext=createContext(null);
export default function AccountProvider({children}) {
    const [account , setAccount]=useState();
    const [person , SetPerson]=useState({}); 
    const [activeUser , setActiveUser]=useState([]); 
    const [newMessageFlag, setMessageFlag] = useState(false);

    const socket=useRef();

    useEffect(()=>{
      socket.current=io('ws://localhost:9000')
    },[]);

    return (
  <AccountContext.Provider value={{
  account,
  setAccount ,
  person ,
  SetPerson,
  socket,
  setActiveUser,
  activeUser,
  newMessageFlag,
  setMessageFlag
    }} >
    
    {children}
    </AccountContext.Provider>
    )
}
