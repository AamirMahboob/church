import React from 'react'

const Navbar1 = () => {
  return (
      <div className='shadow-md w-full bg-black fixed top-0 left-0'>
             <div className='md:flex items-center justify-between  bg-white py-4 md:px-10 px-7 '>
                <div>
                <p>SmBlast</p>
                </div>
             <div className='md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full  '>
                   <div className='md:ml-8 text-xl md:my-0 my-7    '>
                      <button>button 1</button>
                      <button>button 2</button>
                   </div>
            </div>   
             </div>
      </div>
  )
}

export default Navbar1