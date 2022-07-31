import * as React from 'react'

const FormButton = ({ title, isLoading }) => {
  return (
    <button type='submit' className='btn btn-primary w-100 p-3' disabled={isLoading}>
      {isLoading ? (
        <>
          <span
            className='spinner-border spinner-border-sm'
            role='status'
            aria-hidden='true'
          ></span>
          {` Loading...`}
        </>
      ) : (
        title
      )}
    </button>
  )
}

FormButton.defaultProps = {
  isLoading: false
}

export default FormButton
