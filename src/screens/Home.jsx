import React from 'react'
import Navbar from '../components/Navbar'
 
import Main from '../components/Main'

function Home() {
  return (
    <div className='bg-gray-300 md:w-screen md:h-full  w-screen  ' > 
      <Navbar />
      <div className='p-5  h-full w-full  '>
      <Main />
      </div>
      
    </div>
  )
}

export default Home