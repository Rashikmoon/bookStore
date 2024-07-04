import React from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Course from './component/Course'
import Signup from './Signup'

const App = () => {
  return (
    <div>
     <div className='dark:bg-slate-900 dark:text-white'>
      
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
     </div>
    </div>
  )
}

export default App