import { Link } from 'gatsby'
import * as React from 'react'

import StudentLayout from '../../components/layouts/StudentLayout'
import Seo from '../../components/seo'

const StudentHomePage = () => (
  <StudentLayout>
    <Seo title='Student | Home' />
    <div className='text-center pb-3'>
      <Link to='/company/jobs/create' className='btn btn-secondary py-3 px-5'>
        Upload a Job
      </Link>
    </div>
  </StudentLayout>
)

export default StudentHomePage
