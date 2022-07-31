import { subYears } from 'date-fns'
import { Link, navigate } from 'gatsby'
import React, { useReducer, useState } from 'react'
import { genericReducer } from '../../utils/form-utils'
import DateField from './fields/DateField'
import FormButton from './fields/FormButton'
import TextField from './fields/TextField'

const RegisterStudent = () => {
  const [studentRegistrationFields, dispatch] = useReducer(genericReducer, {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const {
    firstName,
    lastName,
    dateOfBirth,
    email,
    password,
    confirmPassword
  } = studentRegistrationFields

  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (event, callback) => {
    callback({ [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setIsLoading(true)
    navigate('/student')
  }
  return (
    <div>
      <div className='p-0 d-flex justify-content-center'>
        <form method='POST' onSubmit={handleSubmit} className='w-100'>
          <TextField
            label='First Name:'
            id='firstName'
            placeholder='e.g. Ama'
            inputProps={{
              inputMode: 'text',
              required: true,
              value: firstName,
              maxLength: 255,
              minLength: 2,
              pattern: `.*[a-zA-Z_\\s\\-].*$`,
              onInput: e => handleChange(e, dispatch),
              tabIndex: 1
            }}
          />
          <TextField
            label='Last Name:'
            id='lastName'
            placeholder='e.g. Last'
            inputProps={{
              inputMode: 'text',
              required: true,
              value: lastName,
              maxLength: 255,
              minLength: 2,
              pattern: `.*[a-zA-Z_\\s\\-].*$`,
              onInput: e => handleChange(e, dispatch),
              tabIndex: 2
            }}
          />
          <TextField
            label='Email:'
            id='email'
            placeholder='e.g. me@example.com'
            inputProps={{
              inputMode: 'text',
              required: true,
              value: email,
              maxLength: 255,
              minLength: 2,
              pattern: `.*[a-zA-Z_\\-].*$`,
              onInput: e => handleChange(e, dispatch),
              tabIndex: 3
            }}
          />
          <DateField
            label='Date of Birth:'
            id='date'
            inputProps={{
              selected: dateOfBirth,
              onChange: newDate =>
                dispatch({
                  dateOfBirth: newDate
                }),
              maxDate: subYears(new Date(), 16),
              tabIndex: 4
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
              onInput: e => handleChange(e, dispatch),
              tabIndex: 5
            }}
          />
          <TextField
            label='Confirm Password:'
            id='confirmPassword'
            inputProps={{
              inputMode: 'confirmPassword',
              type: 'password',
              required: true,
              value: confirmPassword,
              maxLength: 255,
              minLength: 2,
              onInput: e => handleChange(e, dispatch),
              tabIndex: 6
            }}
          />
          <FormButton title='Create Account' isLoading={isLoading} />
        </form>
      </div>
      <div className='text-center py-5'>
        <p>Already have an account?</p>
        <Link
          to='/'
          className='btn btn-outline-primary w-100 p-3'
        >
          Sign In
        </Link>
      </div>
    </div>
  )
}

export default RegisterStudent
