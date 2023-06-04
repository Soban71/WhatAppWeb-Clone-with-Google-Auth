import { useState } from 'react';
import Header from './Header'
import Search from './Search';
import Conversions from './Conversions';

export default function Menu() {
  const [text,setText]=useState();
  return (
    <>
   <Header/>
   <Search setText={setText}/>
   <Conversions text={text}/>
    </>
  )
}
