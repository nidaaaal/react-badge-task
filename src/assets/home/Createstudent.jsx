import React, { useContext} from 'react'
import { Studentcontext } from './Studentprovider';
import { useNavigate } from 'react-router-dom';


export default function Createstudent() {
    const navigate =useNavigate()
        const {name,setname,phone,setphone,email,setemail,course,setcourse,data,setdata}=useContext(Studentcontext)
        function handlesubmit(e){
          e.preventDefault();
          const newstudent={id:Date.now(),name,phone,email,course}
            setdata([...data,newstudent])
            setcourse("")
            setemail("")
            setname("")
            setphone("")
        }
    
  return (
    <div>
        <form onSubmit={handlesubmit}>
      <label >student name</label>
      <input type="text" value={name} onChange={(e)=>setname(e.target.value)} required/>
      <label >email</label>
      <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} required/>
      <label >phone</label>
      <input type="text" value={phone} onChange={(e)=>setphone(e.target.value)} required/>
      <label >course</label>
      <input value={course} onChange={(e)=>setcourse(e.target.value)} required/>
      <button type="submit">add</button>
</form>
<button onClick={()=>navigate('/home')}>return to home</button>
    </div>

  )
}
