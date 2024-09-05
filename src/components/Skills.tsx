"use client"
import { GlareCardDemo } from '@/ui-components/Skill-Ui'
import React from 'react'
import { motion, useScroll } from "framer-motion"

const Skills = () => {
  return (
    <div className='bg-[#190069] pt-8'>
        <span className='font-bold text-3xl  text-start  ml-[-380px] border-b-2 '>SKILLS</span>
        <motion.div 
    initial={{x:-8 , opacity: 0}}
    animate={{x: 1 , opacity: 100}}
    transition={{delay:2 , type:"spring"}}
    className='flex flex-wrap mt-12  justify-center space-x-12 space-y-3'>
        <GlareCardDemo text={"ReactJs"}/>
        <GlareCardDemo text={"NextJs"}/>
        <GlareCardDemo text={"framer-Motion"}/>
        <GlareCardDemo text={"NodeJs"}/>
        <GlareCardDemo text={"JavaScript"}/>
    </motion.div>
    </div>
  )
}

export default Skills