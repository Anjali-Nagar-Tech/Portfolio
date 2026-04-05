import React from 'react'
import AboutImg from '../../assets/7358653-removebg-preview.png'
import {IoArrowForward} from 'react-icons/io5'

const  About = () => {
  return (
    <div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black/30 shadow-xl mx-0 md:mx-20 rounded-lg p-12'>
        <div>
            <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                <img className="md:h-80" src={AboutImg} alt="About_image"/>

                <ul>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1'/>
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>React Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>Develop component-based single-page applications using React, focusing on clean code and reusability. </p>
                        </span>
                    </div>

                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1'/>
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Web Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>I create responsive and performance-driven websites with a focus on usability. </p>
                        </span>
                    </div>

                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1'/>
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Problem Solver</h1>
                            <p className='text-sm md:text-md leading-tight'>I enjoy turning ideas into functional and engaging web experiences. </p>
                        </span>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default  About