import React, { useContext } from 'react'
import { Useproviders } from './Useproviders';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
    const navigate=useNavigate()
    const {data}=Useproviders()
        console.log(data);

  return (
    <div>{data?.map((x)=>{
        <div>
        <li>{x.name}</li>
        <li>{x.email}</li>
        <li>{x.phone}</li>
        <li>{x.course}</li>
    
</div>
    })}
    <button onClick={()=>navigate("/std")}>create new data</button>
    </div>
  )
}
