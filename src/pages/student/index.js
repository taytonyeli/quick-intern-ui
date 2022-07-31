import { Link } from 'gatsby'
import * as React from 'react'

import StudentLayout from '../../components/layouts/StudentLayout'
import Seo from '../../components/seo'

const StudentHomePage = () => (
  <StudentLayout>
    <Seo title='Student | Home' />
    <Seo title='Company | Home' />
    <h1 className='h4 p-5 text-center'>
      Welcome to Quick Intern. In order to get relevant information about Job
      and internship vacancies, kindly update your profile and upload your most
      resent Curriculum Vitae (CV) and profile picture
    </h1>
    <div className='text-center pb-3'>
      <p>You haven't applied for any internships yet</p>
      <Link to='/student/internships' className='btn btn-secondary py-3 px-5'>
        View all internships
      </Link>
    </div>
  </StudentLayout>
)

export default StudentHomePage
