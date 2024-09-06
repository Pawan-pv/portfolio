
"use client"
import React, { useState } from 'react'
import SideNav from './smallCompo/SideNav'
import {motion} from "framer-motion"


const Nav = () => {
    const [sideBar, setSideBar] = useState(false)
    
  return (
    <div>
        <motion.div
            initial={{ y: -300 ,opacity: 0  }}
            animate={{ y: 0, opacity: 1, }}
             transition={{ duration: 0.5, type: "spring" }} 
             
             className='flex justify-between p-3 md:text-xl md:justify-between border satic'>

        <span className=' text-center  pt-7'>MY POrtfolio</span>
        <span onClick={()=>setSideBar(((prev:boolean)=>!prev))} className='  pt-7 block md:hidden '>###</span>
        <nav className='hidden md:block'>
        <ul className='flex space-x-8 p-4  m-3 '>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
        </ul>
        </nav>

    </motion.div>
     {sideBar && (<SideNav/>)}
    </div>
  )
}

export default Nav