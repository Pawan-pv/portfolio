import { motion } from 'framer-motion'
import React from 'react'

const SideNav = () => {
  return (
    <div className='md:hidden '>
      <motion.section
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 1, opacity: 1, }}
        transition={{ duration: 0.2 }} 
        className='overflow-hidden rounded-xl p-5 absolute top-34 z-20 bg-transparent bg-gray-900'>
        <nav className=' md:hidden flex'>
          <motion.ul
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 1, opacity: 1, }}
            transition={{ duration: 0.5, type: "spring" }}
            className=' space-y-8 md:hidden  '>
            <motion.li
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
              className='bg-slate-950 border rounded-md text-base p-1'>home</motion.li>
            <motion.li
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
              className='bg-slate-950 border rounded-md text-base p-1'>home</motion.li>
            <motion.li
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
              className='bg-slate-950 border rounded-md text-base p-1'>home</motion.li>
            <motion.li
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
              className='bg-slate-950 border rounded-md text-base p-1'>home</motion.li>
            <motion.li
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
              className='bg-slate-950 border rounded-md text-base p-1'>home</motion.li>
            <motion.li
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
              className='bg-slate-950 border rounded-md text-base p-1'>home</motion.li>
           

          </motion.ul>
        </nav>
      </motion.section>
    </div>
  )
}

export default SideNav