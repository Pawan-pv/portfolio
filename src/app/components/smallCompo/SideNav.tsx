import { motion } from 'framer-motion'
import React from 'react'

const SideNav = () => {
  return (
    <div className='md:hidden'>
      <motion.section
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 1, opacity: 1, }}
        transition={{ duration: 0.2 }} className='overflow-hidden rounded-xl p-5 absolute top-34 z-20 bg-transparent bg-slate-900 border border-collapse'>
        <nav className=' md:hidden flex h-full'>
          <motion.ul
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 1, opacity: 1, }}
            transition={{ duration: 0.5, type: "spring" }}
            className='flex flex-col  space-y-8   '>
            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1, type: "spring" },
              }}
              whileTap={{ scale: 0.9 }}

              className='bg-slate-950 border rounded-md text-base p-1'
            >
              Home
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1, type: "spring" },
              }}
              whileTap={{ scale: 0.9 }}

              className='bg-slate-950 border rounded-md text-base p-1'
            >
              Home
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1, type: "spring" },
              }}
              whileTap={{ scale: 0.9 }}

              className='bg-slate-950 border rounded-md text-base p-1'
            >
              Home
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1, type: "spring" },
              }}
              whileTap={{ scale: 0.9 }}

              className='bg-slate-950 border rounded-md text-base p-1'
            >
              Home
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1, type: "spring" },
              }}
              whileTap={{ scale: 0.9 }}

              className='bg-slate-950 border rounded-md text-base p-1'
            >
              Home
            </motion.li>

          </motion.ul>
        </nav>
      </motion.section>
    </div>
  )
}

export default SideNav