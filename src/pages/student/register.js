import * as React from 'react'
import RegisterStudent from '../../components/forms/RegisterStudent'

import AuthLayout from '../../components/layouts/AuthLayout'
import Seo from '../../components/seo'

const StudentRegisterPage = () => (
  <AuthLayout>
    <Seo title='Student | Register' />
    <h1 className='h3 py-5'>Join Assisted Intern</h1>
    <RegisterStudent />
  </AuthLayout>
)

export default StudentRegisterPage
