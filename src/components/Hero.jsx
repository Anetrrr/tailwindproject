import React from 'react'
import Typed from 'react-typed'
import { backgroud } from '../assets/index'

const Hero = () => { 
  return (
    <div className="text-white bg-hero-lg bg-repeat">
      <div className='max-w-[800px] mt-[-110px] w-full h-screen flex flex-col justify-center leading-8 lg:p-20'>
        <p className='text-black font-bold text-2xl p-2'>
        I'm Anetor  <span className='font-mont text-rose-500 mx-2 font-extrabold'>Omo-Ataga</span>
        
        </p>
        <h4 className='md:text-4xl sm:text-3xl text-black text-2xl font-bold md:py-6 '>I am a Software Developer with with a passion for Front End Development</h4>
        <div className='flex'>
          {/* <p className='md:text-3xl sm:text-3xl text-xl py-4'></p> */}
          <Typed 
          strings={['JavaScript','React', 'Azure', 'Tailwind', 'NodeJS','MaterialUI']} 
          typeSpeed={120} backSpeed={140} 
          className=" uppercase md:text-3xl sm:text-3xl text-rose-600 md:pl-2 text-xl font-bold" 
          loop/>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 font-roboto py-8'> I love building things, creating new interfaces, developing code and working with new technologies </p>
        <button className='bg-black rounded-md font-medium text-white px-6 w-[200px] p-2 text-xl hover:bg-transparent hover:text-black border-2 border-black hover:scale-105 mt-6'> Know More </button>


      </div>
    
    </div>
  )
}

export default Hero