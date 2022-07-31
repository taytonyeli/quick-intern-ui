import * as React from 'react'
import Login from '../components/forms/Login'

import AuthLayout from '../components/layouts/AuthLayout'
import Seo from '../components/seo'

const IndexPage = () => (
  <AuthLayout>
    <Seo title='Home' />
    <h1 className='h3 py-5'>Assisted Intern</h1>
    <Login />
  </AuthLayout>
)

export default IndexPage
