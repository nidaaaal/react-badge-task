import React, { createContext, useState } from 'react'

export const studentcontext=createContext();

export const Useproviders=()=> {
        const [name,setname]=useState('');
        const [phone,setphone]=useState('');
        const [email,setemail]=useState('');
        const [course,setcourse]=useState('');
        const [data,setdata]=useState([]);

  return {name,setname,phone,setphone,email,setemail,course,setcourse,data,setdata}
        
}
