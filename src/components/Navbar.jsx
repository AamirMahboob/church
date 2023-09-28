import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
function Navbar () {
  return (
     <nav className='flex flex-row justify-between items-center bg-white w-full h-[70px]'>
         <div className='m-6'>
            <Link to={'/'} >
            <img
                 src={logo}
                 width={145}
                 height={150}
             />
            </Link>

         </div>
          <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"    >
          
          <svg class="w-5 h-5">
            <path stroke="currentColor" stroke-linecap="round"   stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
          </button>
     
    <div class="hidden   md:block md:w-auto "  >
    <div className='flex flex-row  m-8  '>
              <div className='border-r-2 border-black mx-5 '>
                  <button className='    border-solid border-2  w-[100px] p-1  rounded-[20px] bg-yellow-400 mx-5' >
                    Login
                  </button>
              </div>
               <div>
              <button className='          border-solid  text-yellow-400 border-yellow-400 border-2  w-[100px] p-1  rounded-[20px] bg-transparent mx-5' >
                    free trial
                  </button>
              </div>
         </div>
    </div>
         
     </nav>
  )
}

export default  Navbar