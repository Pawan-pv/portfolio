"use client"
import React from 'react'
import { motion } from "framer-motion"
import AboutSec from './AboutSec'

const HeroSec = () => {
  return (
    <motion.div className='overflow-hidden'>
        
        <h1 className=' text-start pl-6 font-extrabold text-4xl'>I’m John, a Web Developer</h1>
        <p className=' pl-6 mt-4 text-start'>Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis <br/> ullamcorper quis id elementum convallis lacus gravida.</p>
        
        <motion.div className='mt-5 border w-[80px]  overflow-hidden rounded-full ml-6 bg-black p-10'>
          
        </motion.div>
         
        <div className='mt-8 ml-6'>
        <AboutSec/>
        </div>

    </motion.div>
  )
}

export default HeroSec