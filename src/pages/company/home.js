import { Link } from 'gatsby'
import * as React from 'react'
import JobList from '../../components/jobs/JobList'

import CompanyLayout from '../../components/layouts/CompanyLayout'
import Seo from '../../components/seo'

const CompanyHomePage = () => (
  <CompanyLayout>
    <Seo title='Company | Home' />
    <h1 className='h3 p-5 text-center'>
      Welcome to Assisted Intern, you can now upload job vacancies in your
      company in order to reach persons who best fit these vacancies​
    </h1>

    <div className='text-center pb-3'>
      <Link to='/company/jobs/create' className='btn btn-secondary py-3 px-5'>
        Upload a Job
      </Link>
    </div>

    <JobList title='Your Uploaded Jobs' />
  </CompanyLayout>
)

export default CompanyHomePage
