import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import '../layout.scss'
import CompanyNavbar from './CompanyNavbar'

const CompanyLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query CompanySiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className='container-fluid p-0'>
      <CompanyNavbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className='container-lg'>{children}</main>
    </div>
  )
}

CompanyLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default CompanyLayout
