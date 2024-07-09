import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvieder from './context/AuthProvieder.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvieder>
    <div className='dark:bg-slate-900 dark:text-white'>
    <App />
    </div>
    </AuthProvieder>
  </BrowserRouter>,
)
