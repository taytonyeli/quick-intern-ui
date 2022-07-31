import * as React from 'react'
import CreateJob from '../../../components/forms/jobs/CreateJob'

import CompanyLayout from '../../../components/layouts/CompanyLayout'
import Seo from '../../../components/seo'

const CompanyHomePage = () => (
  <CompanyLayout>
    <Seo title='Company | Home' />
    <h1 className='h3 p-5 text-center'>Upload a job</h1>
    <CreateJob />
  </CompanyLayout>
)

export default CompanyHomePage
