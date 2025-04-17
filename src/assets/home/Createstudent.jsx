import React, { useContext} from 'react'
import { Useproviders } from './Useproviders';
import { useNavigate } from 'react-router-dom';


export default function Createstudent() {
    const navigate =useNavigate()
        const {name,setname,phone,setphone,email,setemail,course,setcourse,data,setdata}=Useproviders()

        function handlesubmit(e){
            e.preventDefault();
            setdata([{...data,id:Date.now(),name:name,phone:phone,email:email,course:course}])

        }
    
  return (
    <div>
        <form onSubmit={handlesubmit}>
      <label >student name</label>
      <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
      <label >email</label>
      <input type="text" value={email} onChange={(e)=>setemail(e.target.value)}/>
      <label >phone</label>
      <input value={phone} onChange={(e)=>setphone(e.target.value)}/>
      <label >course</label>
      <input value={course} onChange={(e)=>setcourse(e.target.value)}/>
      <button type="submit">add</button>
</form>
<button onClick={()=>navigate('/home')}>return to home</button>
    </div>

  )
}
