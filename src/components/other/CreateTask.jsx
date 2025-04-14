import React from 'react'

function CreateTask() {
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
      {/* form started */}
      <form className='flex flex-wrap w-full items-start justify-between'>
        {/* Task Title Div */}
        <div className='w-1/2'>
        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
        <input className=' text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='make UI design' />
        
        {/* Date div */}
        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
        <input className=' text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='date'/>
        {/* Category */}
        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
        <input className=' text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='design or dev etc '/>
        {/* Assign to  */}
        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
        <input className=' text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='employee name' />       </div>
     
        {/* Description */}
        <div className='w-2/5 flex flex-col items-start'>
        <h3 className='text-sm text-gray-300 mb-0.5'>Desription</h3>
        <textarea className='w-full h-44 text-sm py-2 px-4 w-4/5 rounded outline-none bg-transparent border-[1px] border-x-gray-400' type="text" />
        <button  className='bg-emerald-500 py-3 hover:bg-emerald-600 rounded text-sm mt-4 w-full'>Create Task</button></div>
 
      </form>

    </div>
  )
}

export default CreateTask