import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: 'nav-link active' }
    : { className: 'nav-link' }
}

const ExactNavLink = props => <Link getProps={isActive} {...props} />

const StudentNavbar = ({ siteTitle }) => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-primary'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand' href='#'>
          {`${siteTitle}`}
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

        <div
          className='collapse navbar-collapse justify-content-end'
          id='main-navbar'
        >
          <ul className='navbar-nav align-self-end mb-2 mb-md-0'>
            <li className='nav-item'>
              <ExactNavLink to='/student'>Home</ExactNavLink>
            </li>
            <li className='nav-item'>
              <ExactNavLink to='/student/profile'>Profile</ExactNavLink>
            </li>
            <li className='nav-item'>
              <ExactNavLink to='/student/resume'>CV</ExactNavLink>
            </li>
            <li className='nav-item'>
              <ExactNavLink to='/student/internships'>Internships</ExactNavLink>
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
                  <Link to='/' className='dropdown-item' href='#'>
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

StudentNavbar.propTypes = {
  siteTitle: PropTypes.string
}

StudentNavbar.defaultProps = {
  siteTitle: ''
}

export default StudentNavbar
