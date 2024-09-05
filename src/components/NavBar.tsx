"use client"

import React from 'react'
import { motion } from "framer-motion"

const NavBar = () => {
  return (
   <motion.div
   initial={{ y: -30, opacity: 0}}
   animate={{ y: 1 , opacity: 1 }}
   transition={{delay: 0.2, type: "spring", stiffness: 100}}
   className="pt-8">
     <div className=' flex justify-evenly  border overflow-hidden rounded-full p-4 items-center m-2 '>
        <span className='text-green-600 '>$$<span className='text-white'>DEVEloper</span></span>
        <ul className='flex justify-center space-x-6 border-b-2 text-center'>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
        </ul>
    </div>
   </motion.div>
  )
}

export default NavBar