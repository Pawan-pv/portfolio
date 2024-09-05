"use client"
import React from 'react'
// import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const ProfileSec = () => {
  return (
    <div className='bg-[#190069]  p-23 pl-6 '>
        <div className='flex space-x-6'>
           <FaInstagram style={{fontSize: 35}}/>
           <FaLinkedinIn style={{fontSize: 35}}/>
           <FiTwitter style={{fontSize: 35}}/>
           <FaGithub style={{fontSize: 35}}/>
        </div>
        <div className='border '>
         <div className='p-23 h-60 block bg-neutral-400'>kmsmd</div>
        </div>

    </div>
  )
}

export default ProfileSec