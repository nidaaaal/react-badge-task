import React, { Children, createContext, useState } from 'react'

export const Studentcontext=createContext();
export default function Studentprovider({children}){
        const [name,setname]=useState('');
        const [phone,setphone]=useState('');
        const [email,setemail]=useState('');
        const [course,setcourse]=useState('');
        let [data,setdata]=useState([]);

  return (
  <Studentcontext.Provider value={{name,setname,phone,setphone,email,setemail,course,setcourse,data,setdata}}>
  {children}
  </Studentcontext.Provider>)
  }
