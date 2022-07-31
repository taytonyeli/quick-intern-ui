import React, { useEffect, useState } from 'react'
import { sampleJobData } from '../../data/sampleJobs'
import Loader from '../shared/Loader'
import JobListItem from './JobListItem'

const JobList = ({ title }) => {
  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setJobs(sampleJobData)
    setIsLoading(false)
  }, [])

  return (
    <div className='p-5'>
      <p className='h-5 bold'>{title}</p>

      {isLoading && <Loader />}

      {!isLoading && (
        <>
          <div className='list-group border border-0'>
            {jobs.map(
              ({
                title,
                description,
                company,
                industry,
                country,
                location,
                activeFrom
              }) => (
                <JobListItem
                  title={title}
                  company={company}
                  description={description}
                  createdOn={activeFrom}
                />
              )
            )}
          </div>
        </>
      )}
    </div>
  )
}

JobList.defaultProps = {
  title: 'Uploaded Jobs'
}

export default JobList
