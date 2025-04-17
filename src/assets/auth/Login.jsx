import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Useuser } from '../../components/Useuser'
import { toast } from 'react-toast';

export default function Login() {
const navigate=useNavigate()
const [password,setpassword]=useState('');
    const [email,setemail]=useState('');
const {user}=Useuser();
const handlesubmit=(e)=>{
  e.preventDefault()
user.map((x)=>{
  if(x.email===email&&x.password===password){
    toast.success('login successfull')
    navigate('/home');
  }
  else{
    toast.error("user not found")
  }
})


}
    
  return (
    <div>
    <form onSubmit={(e)=>handlesubmit(e)}>
    <label >EMAIL</label>
    <input type="email"  required value={email} onChange={(e)=>setemail(e.target.value)}/>
    <label  >PASSWORD</label>
    <input type="password" required value={password} onChange={(e)=>setpassword(e.target.value)}/>
    <button type="submit">Login</button>
      </form>
      <p onClick={()=>navigate('/reg')}>create new account?</p>
    </div>
  )
}
