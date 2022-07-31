import * as React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DateField = ({ id, label, inputProps }) => {
  return (
    <div className='mb-3'>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      <div>
        <DatePicker
          className='form-control border-primary w-100 p-3'
          dateFormat='MMMM d, yyyy'
          {...inputProps}
          id={id}
        />
      </div>
    </div>
  )
}

export default DateField
