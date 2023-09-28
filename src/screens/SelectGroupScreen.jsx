import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Dropdown } from 'primereact/dropdown';
import { useNavigate } from 'react-router';
function SelectGroupScreen() {
    const navigate = useNavigate();
    const [selectedChurch, setSelectedChurch] = useState(null)

    const church = [
        { name: 'LoremIpsum', code: 'NY' },
        { name: 'LoremIpsum', code: 'RM' },
        { name: 'LoremIpsum', code: 'RM' },
        { name: 'LoremIpsum', code: 'RM' },
        { name: 'LoremIpsum', code: 'RM' },
    ]
    const handleSelect = (e) => {
        setSelectedChurch(e.target.value)
    }
    return (
        <div className='bg-gray-300 w-full h-screen   ' >
            <Navbar />

            <div className=' md:flex md:flex-row justify-center items-center  mx-5 my-5 rounded-xl  '>
                <div className='md:w-[700px]     rounded-lg shadow-lg    '>
                    <img src='https://ca-times.brightspotcdn.com/dims4/default/2cedc78/2147483647/strip/true/crop/5334x3494+0+0/resize/1200x786!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb6%2Fa1%2Fce642bef4a8ca5b30b40d74690ed%2F1317330-la-me-migranst-st-anthony-church-01-rr.jpg'
                        className="object-cover rounded-lg "
                    />
                </div>

                <div className="bg-white  md:w-[500px] md:h-[430px] w-[100%] h-[100%] rounded-lg shadow-lg">
                    <div className='m-8'>
                        <h1 className="text-[42px] font-bold text-yellow-400 font-[Raleway] leading-10  my-5">Let's Keep Going</h1>
                        <p className=" text-[18px] font-[Raleway] font-normal">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam neque sint eveniet. Tenetur sunt inventore
                            quibusdam unde itaque earum, maxime voluptates amet cupiditate
                        </p>
                    </div>
                    <div className="  w-[270px] bg-yellow-400 mx-7 rounded-lg shadow-lg md:h-[50px] h-[40px] md:w-[90%]">
            
                        <Dropdown
                            value={selectedChurch}
                            onChange={ handleSelect }
                            options={church.map(church => ({
                                label: church.name,
                                value: church.name,
                                style: { backgroundColor: 'gray', color: 'white', padding: '15px', borderBottom: '1px solid black' }
                            }))}
                            optionLabel="label"
                            placeholder="Blessed Sacrament Church"
                            className="w-full md:w-14rem  md:m-3 md:mr-30px "
                        />

                    </div>
                    <div className='mt-[100px] mb-[15px]  ml-[10px] '>
                    <button onClick={()=>{navigate('/verifyemail')}} className='    border-solid border-2  w-[100px] p-1  rounded-[10px] bg-yellow-400 mx-5' >
                    Next
                  </button>
                    </div>
                </div>

            </div>

        </div>
    )

}

export default SelectGroupScreen