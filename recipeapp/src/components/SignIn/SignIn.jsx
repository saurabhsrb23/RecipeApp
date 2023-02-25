import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import './SignIn.css'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

  const navigate=useNavigate()
  const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [rem,setRem]=useState(false)
const loginPermission=email.length&&password.length && rem

const SiginBtn=async(e)=>{
  if(loginPermission){
    e.preventDefault();
    await axios.post('http://localhost:9000/login',{
      email,
      password
    }).then((res)=>{
      if(res.data.message==="login sucessfully"){
        localStorage.removeItem('userData')
        localStorage.setItem("userData",JSON.stringify(res.data))
        navigate('/home')
      }
      else if(res.data.message==="user should register"){
        alert("Please Registerd first")
        navigate('signup')
      }
    }).catch((err)=>{
      alert("Inviled credential !")
    })
  }else{
    e.preventDefault();
    alert("please filled the ditalis")
  }



}



  return (
    <div className='container-signin'>
      <div className='main-container-sigin'>
        <main className='main-signin'>
          <header className='signin-header'>Sign In</header>
          <form onSubmit={SiginBtn} className='signupForm'  action="">
            <div className='input-container'>
            <div className='email-heading'>Email address</div>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} className='in-signin' type="text" placeholder='Enter email'  />
            </div>
            <div className='input-container'>
            <div className='pass-heading' >Password</div>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} className='in-signin' type="password" placeholder='Enter password' />
            </div>
            <div className='input-container'>
              <input className='x' onClick={()=>setRem(true)} type="checkbox" />
              <span className='Remember'>Remember Me</span>
            </div>
            <div className='input-container'>
              <button type="submit" className='sign-in-btn'>Submit</button>
            </div>
            <div className='forget'>Forget <span className='forget-pass'>password ?</span></div>
          </form>
        </main>
      </div>
    </div>
  )
}

export default SignIn