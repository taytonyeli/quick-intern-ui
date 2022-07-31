import * as React from 'react'
import RegisterCompany from '../../components/forms/RegisterCompany'

import AuthLayout from '../../components/layouts/AuthLayout'
import Seo from '../../components/seo'

const CompanyRegisterPage = () => (
  <AuthLayout>
    <Seo title='Company | Register' />
    <h1 className='h3 py-5'>Join Assisted Intern as Company</h1>
    <RegisterCompany />
  </AuthLayout>
)

export default CompanyRegisterPage
