import React from 'react'
import SidePanel from '../components/SidePanel'
import TaskForm from './TaskForm'

const Contact = () => {
  return (
    <div className='flex justify-between'>
      <SidePanel/>
      <TaskForm/>
    </div>
  )
}

export default Contact