import { h } from 'preact'
import { useState } from 'preact/hooks'
import FormButton from '../../components/form/FormButton'
import TextField from '../../components/form/TextField'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dob, setDOB] = useState('')

  const handleChange = (event, callback) => {
    callback(event.target.value)
  }
  return (
    <div>
      <h2>Join Assisted Intern</h2>
      <form className='centerStage' method='POST'>
        <TextField
          label='Email:'
          id='email'
          placeholder='me@example.com'
          inputProps={{
            inputMode: 'text',
            required: true,
            value: email,
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
            onInput: e => handleChange(e, setPassword),
            tabIndex: 2
          }}
        />
        <TextField
          label='First Name:'
          id='firstName'
          placeholder='First Name'
          inputProps={{
            inputMode: 'text',
            required: true,
            value: firstName,
            onInput: e => handleChange(e, setFirstName),
            tabIndex: 1
          }}
        />
        <TextField
          label='Last Name:'
          id='lastName'
          placeholder='Last Name'
          inputProps={{
            inputMode: 'text',
            required: true,
            value: lastName,
            onInput: e => handleChange(e, setLastName),
            tabIndex: 1
          }}
        />
        <TextField
          label='Date of Birth:'
          id='dob'
          placeholder=''
          inputProps={{
            inputMode: 'date',
            required: true,
            value: dob,
            type: 'date',
            onInput: e => handleChange(e, setDOB),
            tabIndex: 1
          }}
        />
        <FormButton title='Sign Up' />
      </form>
    </div>
  )
}

export default SignUp
