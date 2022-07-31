import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import '../layout.scss'
import StudentNavbar from './StudentNavbar'

const StudentLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query StudentSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className='container-fluid p-0'>
      <StudentNavbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
    </div>
  )
}

StudentLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default StudentLayout
