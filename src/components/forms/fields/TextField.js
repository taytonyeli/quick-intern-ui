import * as React from 'react'

const TextField = ({ label, id, placeholder, inputProps }) => {
  return (
    <div className='mb-3'>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      <div>
        <input
          type='text'
          name={id}
          placeholder={placeholder}
          className='form-control border-primary w-100 p-3'
          id={id}
          {...inputProps}
        />
      </div>
    </div>
  )
}

TextField.defaultProps = {
  label: 'label',
  id: '',
  placeholder: '',
  inputProps: {}
}

export default TextField
