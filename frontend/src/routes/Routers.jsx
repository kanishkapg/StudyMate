import React from 'react'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Downloads from '../pages/Downloads'
import Features from '../pages/Features'

import {Routes, Route} from 'react-router-dom'
import OtpSubmissionPage from '../pages/OtpSubmissionPage'
import ToDoBeforeLogin from '../pages/ToDoBeforeLogin.jsx'
import ToDoAfterLogin from '../pages/ToDoAfterLogin.jsx'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Signup/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/downloads' element={<Downloads/>} />
        <Route path='/features' element={<Features/>} />
        <Route path='/otp-submission' element={<OtpSubmissionPage/>} />
        <Route path='/to-do-before' element={<ToDoBeforeLogin/>} />
        <Route path='/to-do-after' element={<ToDoAfterLogin/>} />
    </Routes>
  )
}

export default Routers