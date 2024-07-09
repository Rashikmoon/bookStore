import React from 'react'
import { Toaster } from 'react-hot-toast';
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Course from './component/Course'
import Signup from './Signup'
import { useAuth } from './context/AuthProvieder';

const App = () => {
  const [authUser,setAuthUser] = useAuth();
  console.log(authUser)
  return (
    <div>
     <div className='dark:bg-slate-900 dark:text-white'>
      
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={authUser?<Course/>:<Navigate to={"/signup"}></Navigate>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
      <Toaster />
     </div>
    </div>
  )
}

export default App