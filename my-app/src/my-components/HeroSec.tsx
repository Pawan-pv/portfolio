"use client"
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// import Image from 'next/image';

const HeroSec = () => {
  return (
    <>
      <div className=''>
        <div className='space-y-2'>
          <h3 className="text-xl">FOLLOW ME</h3>
          <div className='space-x-4  border pl-3'>
            <FacebookIcon   color="primary"/>
            <TwitterIcon  color="primary"/>
            <InstagramIcon  color="primary"/>
            <LinkedInIcon  color="primary"/>
            <GitHubIcon  color="primary"/>
          </div>
          {/* <Image>
            
          </Image> */}
        </div>
      </div>
    </>
  )
}

export default HeroSec