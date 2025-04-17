import React, { useContext } from 'react'
import { Studentcontext } from './Studentprovider';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
    const navigate=useNavigate()
    let {data,setdata,setname,setemail,setphone,setcourse}=useContext(Studentcontext)
        console.log(data);

        function del(id){
         const updated=data.filter((x)=>x.id!==id)
         setdata(updated)
  }
  function edit(student){
    setname(student.name);
    setemail(student.email);
    setphone(student.phone);
    setcourse(student.course);
    navigate('/std')
    const updated = data.filter(s => s.id !== student.id);
    setdata(updated);
  };

  return (
    <div>
    <h2>Student List</h2>
    <ul>
      {data.map((x) => (
        <li key={x.id}>
          <strong>{x.name}</strong><br />
          Email: {x.email} <br />
          Phone: {x.phone} <br />
          Course: {x.course}<br/>
          <button onClick={()=>del(x.id)}>delete</button>
          <button onClick={()=>edit(x)}>edit</button>

          <hr />
        </li>
      ))}
    </ul>
    <button onClick={() => navigate("/std")}>Create New Data</button>
  </div>
  
  )
}
