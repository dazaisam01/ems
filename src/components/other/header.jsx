import React from 'react'

function Header() {
  return (
    <div className='flex item-end justify-between'>
      <h1 className='font-medium'>Hello <br /><span className='text-3xl font-semibold'>Samarth ✌️</span></h1>
      <button className='bg-red-500 text-white px-5 py-2 rounded-md text-lg font-medium'>Logout</button>
     
    </div>
  )
}

export default Header