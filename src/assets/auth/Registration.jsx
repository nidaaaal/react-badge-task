import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

export default function Registration() {
    const navigate=useNavigate()
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const [email,setemail]=useState('');
    const[userdata,setUserdata]=useState([]);

   function handlesubmit(e){
    e.preventDefault();
    setUserdata({id:Date.now(),username:username,email:email,password:password})
    
    axios.post("http://localhost:5000/user",userdata);
    // navigate("/")
   }

   console.log('ggg',userdata);


  return (
    <div>
    <div>
    <form onSubmit={handlesubmit}>
    <label >USERNAME</label>
    <input type="text" required value={username} onChange={(e)=>setusername(e.target.value)}/>
    <label >EMAIL</label>
    <input type="email"  required value={email} onChange={(e)=>setemail(e.target.value)}/>
    <label  >PASSWORD</label>
    <input type="password" required value={password} onChange={(e)=>setpassword(e.target.value)}/>
    <button type="submit">SIGN-IN</button>
      </form>
      <p onClick={()=>navigate('/')}>already have account?</p>
</div>
    </div>
  )
}
