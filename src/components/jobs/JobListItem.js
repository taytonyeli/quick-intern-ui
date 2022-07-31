import { format } from 'date-fns'
import * as React from 'react'

const JobListItem = ({ title, company, description, createdOn }) => {
  return (
    <div className='list-group-item list-group-item-action py-3 my-1 border-start-0 border-end-0'>
      <div className='d-flex w-100 justify-content-between'>
        <h5 className='mb-2 fw-semibold'>{title}</h5>
        <small>{format(createdOn, 'MMMM d, yyyy')}</small>
      </div>
      <p className='mb-1'>{company}</p>
      <small>{description}</small>
    </div>
  )
}

JobListItem.defaultProps = {
  title: 'Uploaded Jobs'
}

export default JobListItem
