import { Link, navigate } from 'gatsby'
import React, { useState } from 'react'
import FormButton from './fields/FormButton'
import TextField from './fields/TextField'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (event, callback) => {
    callback(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setIsLoading(true)

    if (email.includes('company')) {
      navigate('/company')
    } else {
      navigate('/student')
    }
  }
  return (
    <div>
      <div className='p-0 d-flex justify-content-center'>
        <form method='POST' onSubmit={handleSubmit} className='w-100'>
          <TextField
            label='Email:'
            id='email'
            placeholder='me@example.com'
            inputProps={{
              inputMode: 'text',
              required: true,
              value: email,
              maxLength: 255,
              minLength: 2,
              pattern: `.*[a-zA-Z_\\-].*$`,
              onInput: e => handleChange(e, setEmail),
              tabIndex: 1
            }}
          />
          <TextField
            label='Password:'
            id='password'
            inputProps={{
              inputMode: 'password',
              type: 'password',
              required: true,
              value: password,
              maxLength: 255,
              minLength: 2,
              onInput: e => handleChange(e, setPassword),
              tabIndex: 2
            }}
          />
          <FormButton title='Log In' isLoading={isLoading} />
        </form>
      </div>
      <div className='text-center py-3'>
        <p>Don't have an account?</p>
        <div className='row'>
          <div className='col-6'>
            <Link
              to='/student/register'
              className='btn btn-outline-primary w-100 p-3'
            >
              Join as a Student
            </Link>
          </div>
          <div className='col-6'>
            <Link
              to='/company/register'
              className='btn btn-outline-primary w-100 p-3'
            >
              Join as a Company
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
