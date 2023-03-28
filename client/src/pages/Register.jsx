import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import FormField from '../components/FormField'
import Spinner from '../components/Spinner'
import { reset, register } from '../features/authSlice'

const linkStyle = {
    color: '#01161e',
    fontWeight: 'bold',
    textDecoration: 'underline'
  }

const Register = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      username: '',
      password: '',
      password2: ''
    })
  
    const { email, name, username, password, password2 } = formData
  
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const { user, isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.auth
    )
  
    useEffect(() => {
      if (isError) {
        toast.error(message)
      }
  
      // Redirect when logged in
      if (isSuccess || user) {
        navigate('/')
      }
  
      dispatch(reset())
    }, [isError, isSuccess, user, message, navigate, dispatch])
  
    // As we fill in the form fields, the status is updated
    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      }))
    }
  
    const onSubmit = (e) => {
      e.preventDefault()
  
      if (password !== password2) {
        toast.error('Passwords do not match')
      } else {
        const userData = {
          name,
          email,
          username,
          password
        }
        console.log(userData)
        dispatch(register(userData))
        
      }
    }
  
    if (isLoading) {
      return <Spinner />
    }
  
    return (
      <>
        <section className='heading'>
          <h1>
            <FaUser /> Register
          </h1>
          <p>Please create an account</p>
        </section>
  
        <section className='form'>
          <form onSubmit={onSubmit}>
            <FormField
              type='email'
              name='email'
              data={email}
              label='Email'
              handleField={onChange}
              message='Enter your email'
            />
            <FormField
              type='text'
              name='name'
              data={name}
              label='Name'
              handleField={onChange}
              message='Enter your name'
            />
            <FormField
              type='text'
              name='username'
              data={username}
              label='Username'
              handleField={onChange}
              message='Enter your username'
            />
            <FormField
              type='password'
              name='password'
              data={password}
              label='Password'
              handleField={onChange}
              message='Enter your password'
            />
            <div className='form-group'>
              <input
                type='password'
                className='form-control'
                id='password2'
                name='password2'
                value={password2}
                onChange={onChange}
                placeholder='Confirm password'
                required
              />
            </div>
            <p>Do you already have an account? <Link style={linkStyle} to='/login'>Login here!</Link></p>
            <div className='form-group'>
              <button className='btn btn-block'>Submit</button>
            </div>
          </form>
        </section>
      </>
    )
  }
  
  export default Register