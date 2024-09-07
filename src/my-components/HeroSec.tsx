// "use client"
// import React from 'react'
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import Image from 'next/image';
// import profilePic from '../../public/IMAGES/profile.png';

// const HeroSec = () => {
//   return (
//     <>
//       <div className=''>
//         <div className='space-y-8'>
//           <h3 className="text-xl">FOLLOW ME</h3>
//           <div className='space-x-4 mb-8  pl-3'>
//             <FacebookIcon color="primary" />
//             <TwitterIcon color="primary" />
//             <InstagramIcon color="primary" />
//             <LinkedInIcon color="primary" />
//             <GitHubIcon color="primary" />
//           </div>
//          <div className='border'>
//          <Image
//          className='border ml-40'
//             src={profilePic}
//             width={300}
//             height={300}
//             alt="Picture of the author"
//           />
//          </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default HeroSec

"use client"
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import profilePic from '../../public/IMAGES/profile.png';

const HeroSec = () => {
  return (
    <>
      <div className=''>
        <div className='space-y-8'>
          <h3 className="text-xl">FOLLOW ME</h3>
          <div className='space-x-4 mb-8 pl-3'>
            <FacebookIcon color="primary" />
            <TwitterIcon color="primary" />
            <InstagramIcon color="primary" />
            <LinkedInIcon color="primary" />
            <GitHubIcon color="primary" />
          </div>

          {/* Container for the image */}
          <div className='border flex justify-center p-8'>
            <Image
              className='fill-current'
              src={profilePic}
              width={1000}
              height={800}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSec;
