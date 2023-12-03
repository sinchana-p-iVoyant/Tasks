import React, { useState } from 'react'
import './ContactUs.css'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

export const Login = () => {

  const navigate = useNavigate()

  let loginCredentials = {
    name : 'Admin',
    password : 123
  }

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    
    e.preventDefault()
    console.log("clicked")

    if ( (name === loginCredentials.name) && (password === loginCredentials.password) ) {
      // console.log(name,password)
      // console.log(loginCredentials)
      navigate(`/profile/${name}`)
    }else{
      console.log("Invalid Name or Password")
      alert("Invalid Name or Password")
    }
  } 

  console.log(name, password)

  return (
    <div className='contact-container'>
      
    <form className='form-container'>
      <i className="fa-solid fa-user"></i>
      
      <input 
        type='text' 
        placeholder='Name' 
        onChange={e => setName(e.target.value)}
      />

      <input 
        type='password' 
        placeholder='Password' 
        onChange={e => setPassword(parseInt(e.target.value))}
      />

      <Link to='/profile/:name' onClick={handleLogin} className='login-link'> LOGIN </Link>

      {/* <input 
        type='submit' 
        value='LOGIN'
        onClick={handleLogin}  
      /> */}

    </form>
  </div>
  )
}

