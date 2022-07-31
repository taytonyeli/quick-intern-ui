import { addMonths, addWeeks, subYears } from 'date-fns'
import { Link } from 'gatsby'
import React, { useReducer, useState } from 'react'
import { genericReducer } from '../../../utils/form-utils'
import DateField from '../fields/DateField'
import FormButton from '../fields/FormButton'
import TextField from '../fields/TextField'

const CreateJob = () => {
  const [companyRegistrationFields, dispatch] = useReducer(genericReducer, {
    title: '',
    description: '',
    industry: '',
    country: '',
    location: '',
    activeFrom: new Date(),
    activeTo: addWeeks(new Date(), 1)
  })

  const {
    title,
    description,
    industry,
    country,
    location,
    activeFrom,
    activeTo
  } = companyRegistrationFields

  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (event, callback) => {
    callback({ [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setIsLoading(true)
  }
  return (
    <div>
      <div className='p-0 d-flex justify-content-center'>
        <form method='POST' onSubmit={handleSubmit} className='w-75'>
          <TextField
            label='Job Title:'
            id='title'
            placeholder='e.g. Tester'
            inputProps={{
              inputMode: 'text',
              required: true,
              value: title,
              maxLength: 255,
              minLength: 2,
              pattern: `.*[a-zA-Z].*$`,
              onInput: e => handleChange(e, dispatch),
              tabIndex: 1
            }}
          />
          <TextField
            label='Job Description'
            id='description'
            placeholder='e.g. we are looking for'
            inputProps={{
              inputMode: 'text',
              required: true,
              value: description,
              maxLength: 255,
              minLength: 2,
              pattern: `.*[a-zA-Z].*$`,
              onInput: e => handleChange(e, dispatch),
              tabIndex: 2
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
          <DateField
            label='From:'
            id='activeFrom'
            inputProps={{
              selected: activeFrom,
              onChange: newDate =>
                dispatch({
                  activeFrom: newDate
                }),
              minDate: new Date(),
              tabIndex: 4
            }}
          />
          <DateField
            label='To:'
            id='activeTo'
            inputProps={{
              selected: activeTo,
              onChange: newDate =>
                dispatch({
                  activeTo: newDate
                }),
              maxDate: addMonths(new Date(), 6),
              tabIndex: 4
            }}
          />
          <FormButton title='Upload Job' isLoading={isLoading} />
        </form>
      </div>
    </div>
  )
}

export default CreateJob
