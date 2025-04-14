import React from 'react'

function TaskListNumber() {
  return (
    <div className='flex m-10 justify-between gap-5 screen'>
      <div className='rounded-xl w-[45%] py-3 px-5 bg-blue-300'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-medium font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl w-[45%] py-3 px-5 bg-red-300'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-medium font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl w-[45%] py-3 px-5 bg-yellow-300'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-medium font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl w-[45%] py-3 px-5 bg-green-300'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-medium font-medium'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber