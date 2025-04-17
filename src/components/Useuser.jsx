import axios from 'axios'
import React, {  useEffect, useState } from 'react'

export  function Useuser() {
  const[user,SetUser]=useState([])
  console.log(user)

  useEffect(()=>{
     axios.get("http://localhost:5000/user").then(res=> SetUser(res.data)).catch(err=>console.log(err));
    },[])

    return {user}
}
