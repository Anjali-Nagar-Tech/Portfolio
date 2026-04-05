import React from 'react'
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact} from 'react-icons/fa'
import {SiRedis,SiNextdotjs} from 'react-icons/si'
import { FaGoogle } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import CloverLogo from '../../assets/clover-infotech.jpeg'
// import { RiNetflixFill } from '@remixicon/react'
// import { FaAmazon } from 'react-icons/fa'
const Experience = () => {
  return (
    
    <div id="Experience" className=' flex flex-col p-10 mx-0 md:mx-20 overflow-hidden md:p-24 md:items-center md:flex-wrap md:justify-center'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>


          <div className="flex flex-wrap items-center justify-around">

            <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                  <FaHtml5 color="#E34F26" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                  <FaCss3 color="#1572b6" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                  <FaReact color="#61DAFB" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                  <FaJs color="#F7DF1E" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                  <FaFigma color="#F24E1E" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                  <SiMongodb color="#47A248" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                  <SiNextdotjs color="#FF4438" size={50}/>
                </span>
            </div>

            <div>
            <div>
              <div className='flex gap-10 bg-slate-950/45 mt-4 rounded-lg p-4 items-center'>
                {/* <FaGoogle color='#4285F4' size={50}/> */}
                <img src={CloverLogo} alt="CloverInfotechLogo" className='w-20 h-20 '/>
                <span className='text-white'>
                  <h2 className='leading-tight'>Software Engineer - Clover Infotech Pvt Ltd.</h2>
                  <p className='text-sm leading-tight font-thin'>Jul 2025 - Present</p>
                  <ul className='text-sm p-2 '>
                    {/* <li>- Working as Software Engineer</li>
                    <li>- Adding Frontend Development and React in a full-time skill</li> */}
                  </ul>
                </span>
              </div>
            </div>
            
             
          </div>

        </div>
    </div>
  )
}

export default Experience