import { h } from 'preact'
import { useState } from 'preact/hooks'
import TextField from '../../components/form/TextField'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (event, callback) => {
    callback(event.target.value)
  }
  return (
    <div>
      <h2>Login</h2>
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
      </form>
    </div>
  )
}

export default SignIn
