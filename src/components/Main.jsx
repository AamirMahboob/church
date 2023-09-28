import React from 'react'
import logo from '../assets/logo.svg'
import churchlg from '../assets/church logo.png'
import { useNavigate } from 'react-router'
import SearchInput from './SearchInput';
 

export default function Main() {
  const navigate = useNavigate();
    const churches =  [
        { 
            img:churchlg,
            title: "Blesseed Sacrement church"
        },
        { 
          img:churchlg,
          title: "Blesseed Sacrement church"
        },
        { 
          img:churchlg,
          title: "Blesseed Sacrement church"
        },
        { 
          img:churchlg,
          title: "Blesseed Sacrement church"
        },
        { 
          img:churchlg,
          title: "Blesseed Sacrement church"
        },
        { 
          img:churchlg,
          title: "Blesseed Sacrement church"
        },
         
    ]
    const handleClick = () => {
           navigate('/selectgroup')
    }
  return (
    <div className=' flex  justify-center bg-white flex-col rounded-xl '>
        <div className='flex flex-col items-center w-full ' >
          <div className='flex flex-row p-5 '>
             <img  src='https://e7.pngegg.com/pngimages/643/939/png-clipart-roman-catholic-diocese-of-grand-island-roman-catholic-diocese-of-phoenix-roman-catholic-diocese-of-madison-roman-catholic-diocese-of-gallup-roman-catholic-diocese-of-marquette-catholic-miscellaneous-logo.png'  width={103} height={109}  />
             <h1 className='my-4 mx-4 text-[24px] leading-8 font-bold font-[Rajdhani] '>Welcome to The <br />
                <span className='text-yellow-300 md:text-[42px] text-[25px] font-[Raleway] leading-10 text-center'>Archdiocese of Los Angeles</span>
             </h1>
             
          </div>
          <div className='  flex justify-center md:w-[50%] '>
             
               <SearchInput placeholder={'Search'}  />
              

          </div>
        </div>
        <div className='flex justify-center items-center p-8   md:px-20 pl-5'>
  <div className='flex flex-wrap'>
    {churches.map((church, index) => (
      <div key={index} onClick={() => handleClick(church)} className='flex flex-row  md:basis-[33%] basis-[100%]   p-4 cursor-pointer  '>
        <img src={church.img} alt={church.title} width={70} height={70} />
        <p className='m-3 text-gray-700 text-[25px] font-[Raleway]  font-[500] leading-9 '>{church.title}</p>
      </div>
    ))}
  </div>
        
</div>
          <div className='flex justify-center my-5 '>
          <button className='    border-solid border-2  w-[100px] p-1  rounded-[20px] bg-yellow-400 mx-5' >
                    View all
                  </button>
          </div>

    </div>
  )
}
