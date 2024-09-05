import About from '@/components/About'
import HeroSec from '@/components/HeroSec'
import NavBar from '@/components/NavBar'
import ProfileSec from '@/components/ProfileSec'
import Skills from '@/components/Skills'
import Snippet from '@/components/Snippet'
import { VortexDemoSecond } from '@/ui-components/vertextdemo'
import React from 'react'

const page = () => {
  return (
      <div className='bg-[#190069] h-dvh text-white border'>
        <div className=" text-center overflow-hidden ">
          <NavBar/>
          <div className='p-[2px] text-4xl mt-12 w-[140px] bg-white ml-6 '> </div>
          <div className='mt-8'>
            <HeroSec/>
          </div>
          <ProfileSec/>
          <div className='mt-2'>
            <About/>
          </div>
          <div>
            <Skills/>
          </div>
          <Snippet/>
        </div>
        <VortexDemoSecond/>
      </div>
  )
}

export default page