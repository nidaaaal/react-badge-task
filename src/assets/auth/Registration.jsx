import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Registration() {
    const navigate=useNavigate()
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const [email,setemail]=useState('');
    const userdata ={username,email,password}

   function handlesubmit(e){
    e.preventDefault();
    
    axios.post("http://localhost:5000/user",userdata);
    navigate("/")
    toast.success("REGISTRATION COMPLITED")
   }



  return (
    <div>
      <h1>LOGIN</h1>
    <form onSubmit={handlesubmit}>
    <label >USERNAME</label>
    <input type="text" required value={username} onChange={(e)=>setusername(e.target.value)}/>
    <label >EMAIL</label>
    <input type="email"  required value={email} onChange={(e)=>setemail(e.target.value)}/>
    <label  >PASSWORD</label>
    <input type="password" required value={password} onChange={(e)=>setpassword(e.target.value)}/>
    <button type="submit">SIGN-IN</button>
      </form>
      <Link to='/'>already have account?</Link>
</div>
  )
}
