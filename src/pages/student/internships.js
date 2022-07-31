import * as React from 'react'
import JobList from '../../components/jobs/JobList'

import StudentLayout from '../../components/layouts/StudentLayout'
import Seo from '../../components/seo'

const StudentJobsPage = () => (
  <StudentLayout>
    <Seo title='Student | Internships' />
    <JobList title='All Internships' />
  </StudentLayout>
)

export default StudentJobsPage
