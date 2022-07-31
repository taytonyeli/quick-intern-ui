import { subYears } from 'date-fns'
import { Link, navigate } from 'gatsby'
import React, { useReducer, useState } from 'react'
import { genericReducer } from '../../utils/form-utils'
import DateField from './fields/DateField'
import FormButton from './fields/FormButton'
import TextField from './fields/TextField'

const RegisterCompany = () => {
  const [companyRegistrationFields, dispatch] = useReducer(genericReducer, {
    companyName: '',
    industry: '',
    country: '',
    location: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const {
    companyName,
    industry,
    country,
    location,
    email,
    password,
    confirmPassword
  } = companyRegistrationFields

  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (event, callback) => {
    callback({ [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setIsLoading(true)
    navigate('/company')
  }
  return (
    <div>
      <div className='p-0 d-flex justify-content-center'>
        <form method='POST' onSubmit={handleSubmit} className='w-100'>
          <TextField
            label='Company Name:'
            id='companyName'
            placeholder='e.g. My Company'
            inputProps={{
              inputMode: 'text',
              required: true,
              value: companyName,
              maxLength: 255,
              minLength: 2,
              pattern: `.*[a-zA-Z].*$`,
              onInput: e => handleChange(e, dispatch),
              tabIndex: 1
            }}
          />
          <TextField
            label='Industry'
            id='industry'
            placeholder='e.g. Telecommunication'
            inputProps={{
              inputMode: 'text',
              required: true,
              value: industry,
              maxLength: 255,
              minLength: 2,
              pattern: `.*[a-zA-Z].*$`,
              onInput: e => handleChange(e, dispatch),
              tabIndex: 2
            }}
          />
          <TextField
            label='Country:'
            id='country'
            placeholder='e.g. Ghana'
            inputProps={{
              inputMode: 'text',
              required: true,
              value: country,
              maxLength: 255,
              minLength: 2,
              pattern: `.*[a-zA-Z\\s\\-].*$`,
              onInput: e => handleChange(e, dispatch),
              tabIndex: 3
            }}
          />
          <TextField
            label='Location:'
            id='location'
            placeholder='e.g. Accra'
            inputProps={{
              inputMode: 'text',
              required: true,
              value: location,
              maxLength: 255,
              minLength: 2,
              pattern: `.*[a-zA-Z\\s\\-].*$`,
              onInput: e => handleChange(e, dispatch),
              tabIndex: 3
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
              pattern: `.*[a-zA-Z\\-].*$`,
              onInput: e => handleChange(e, dispatch),
              tabIndex: 3
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
        <Link to='/' className='btn btn-outline-primary w-100 p-3'>
          Sign In
        </Link>
      </div>
    </div>
  )
}

export default RegisterCompany
