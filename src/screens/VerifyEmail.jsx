import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Dropdown } from 'primereact/dropdown';
import { useNavigate } from 'react-router';
function VerifyEmail() {
    const navigate = useNavigate();
     

 
    
    return (
        <div className='bg-gray-300  w-full h-screen    ' >
            <Navbar />

            <div className=' md:flex md:flex-row justify-center items-center  mx-5 my-5 rounded-xl  '>
                <div className='md:w-[700px]     rounded-lg shadow-lg    '>
                    <img src='https://ca-times.brightspotcdn.com/dims4/default/2cedc78/2147483647/strip/true/crop/5334x3494+0+0/resize/1200x786!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb6%2Fa1%2Fce642bef4a8ca5b30b40d74690ed%2F1317330-la-me-migranst-st-anthony-church-01-rr.jpg'
                        className="object-cover rounded-lg "
                    />
                </div>

                <div className="bg-white md:w-[500px] md:h-[430px] w-[320px] h-full rounded-lg shadow-lg">
                    <div  className='p-5 mt-2'>
                        <h1 className="text-3xl font-bold text-yellow-400  my-5">Let's Keep Going</h1>
                        <h1 className="text-2xl font-bold text-black   my-5">One More Step!</h1>
                        <p className=" text-[13px]">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam neque sint eveniet. Tenetur sunt inventore
                            quibusdam unde itaque earum, maxime voluptates amet cupiditate.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita ratione assumenda dolor corporis temporibus error placeat ducimus, id natus quidem aliquam autem quo quibusdam neque, tempora mollitia in suscipit atque.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores distinctio dolorem officia delectus nulla iusto similique quibusdam, aliquid sequi voluptatem libero dolorum ad unde quidem voluptatum tempore? Impedit, asperiores blanditiis?
                        </p>
                    </div>
                     
                    <div className=' flex justify-center  ml-[10px] mb-5 '>
                    <button   className='   mb-3 border-solid border-2  w-[200px] p-1  rounded-[10px] bg-yellow-400 mx-5' >
                    Verify Your Email
                  </button>
                    </div>
                </div>

            </div>

        </div>
    )

}

export default VerifyEmail