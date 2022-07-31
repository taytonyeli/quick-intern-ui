import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: 'nav-link active' }
    : { className: 'nav-link' }
}

const ExactNavLink = props => <Link getProps={isActive} {...props} />

const CompanyNavbar = ({ siteTitle }) => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-primary'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand' href='#'>
          {`${siteTitle} | Company`}
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#main-navbar'
          aria-controls='main-navbar'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse d-flex justify-content-end' id='main-navbar'>
          <ul className='navbar-nav mb-2 mb-md-0'>
            <li className='nav-item'>
              <ExactNavLink to='/company'>Home</ExactNavLink>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                My Account
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <Link to="/" className='dropdown-item' href='#'>
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

CompanyNavbar.propTypes = {
  siteTitle: PropTypes.string
}

CompanyNavbar.defaultProps = {
  siteTitle: ''
}

export default CompanyNavbar
