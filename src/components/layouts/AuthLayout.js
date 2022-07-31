import * as React from 'react'
import PropTypes from 'prop-types'
import "../layout.scss"

const AuthLayout = ({ children }) => {
  return (
    <div className='container-fluid p-0 min-vh-100'>
      <section className='row'>
        <div className='col-12 col-lg-6 order-lg-first vh-100 bg-primary' />
        <div className='col-12 col-lg-6 order-first d-flex align-items-center justify-content-center p-3'>
          <main className='w-75'>{children}</main>
        </div>
      </section>
    </div>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default AuthLayout
