import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './SignUp.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdArrowBackIos } from 'react-icons/md';

const SignUp = () => {
  const navigate=useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passAlert, setPassAlert] = useState('')
  const [term, setTerm] = useState(false)

  const loginPermission = email.length && password.length && confirmPassword.length && term

  const Registered = async (e) => {

    if (loginPermission) {

      e.preventDefault();

      if (password !== confirmPassword) {
        setPassAlert('Passwords do not match')
      }

      const response = await axios.post('https://recipe-saurabhsrb23.onrender.com/signup', {
        email,
        password,
        confirmPassword
      })
      navigate('/')
      console.log(response.data)
    }else{
      alert('please Fill all terms and credential')
    }
  }

  return (
    <div className='container-signup'>
      <div className='main-container-signup'>
        <header className='signup-header'>
          <Link to={'/'}>
            <span className='goBack-signup'><MdArrowBackIos/></span>
          </Link>
          <span className='signup-heading'>SIGN UP</span>
        </header>
        <main className='main-signup'>
          <form onSubmit={Registered} action="">
            <div className='input-container-signup'>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className='in-signup' type="text" placeholder='EMAIL' />
            </div>
            <div className='input-container-signup'>
              <input value={password} onChange={(e) => setPassword(e.target.value)} className='in-signup' type="password" placeholder='PASSWORD' />
            </div>
            <div className='input-container-signup'>
              <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='in-signup' type="password" placeholder='REPEAT PASSWORD' />
              <div className='pass-alert'>{passAlert}</div>
            </div>
            <div className='checkbox-container-signup'>
              <input onClick={() => setTerm(true)} className='y' type="checkbox" />
              <span className="Remember-signup"> I agree with <span className='terms-condition'> TERMS & CONDITIONS</span></span>
            </div>
            <div className='btn-container'>
              <button type='submit' className='sign-up-btn'>CONTINUE</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}

export default SignUp