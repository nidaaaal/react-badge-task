
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './assets/auth/login'
import Registration from './assets/auth/Registration'
import Homepage from './assets/home/Homepage'
import Createstudent from './assets/home/Createstudent'

function App() {
  document.body.style.backgroundColor="#709ba6"
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/reg' element={<Registration/>}/>
      <Route path='/std' element={<Createstudent/>}/>
      <Route path='/home' element={<Homepage/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
