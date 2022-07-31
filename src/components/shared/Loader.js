import * as React from 'react'

const Loader = ({ loadingText }) => {
  return (
    <div className='text-center p-5'>
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>{loadingText}</span>
      </div>
    </div>
  )
}

Loader.defaultProps = {
  loadingText: `Loading...`
}

export default Loader
