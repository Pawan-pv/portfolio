import React from 'react'
import Img from "../../public/Images/img.png"
import Image from "next/image"
import { CardSpotlightDemo } from './AboutCart'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';



const Herosec = () => {
    return (
        <div className='bg-black  text-red-400 pt-20  overflow-hidden relative p-3 flex flex-col md:flex-row md:justify-between md:items-center '>
            <div className='iteams-center
            md:w-full flex flex-col md:flex-row space md:justify-between  '>
                {/* <TypewriterEffectSmoothDemo/> */}
                <div className='z-30 '>
                    <div className='md:ml-8 
                    md:mt-24 '>
                        <h1 className='md:text-7xl text-6xl font-bold md:font-extrabold text-yellow-50/90  text-center '>I’m John,<br /> <span className='text-blue-500'>a Web Developer</span></h1>
                        <p className='pt-4  text-gray-50/90 md:mt-16 md:text-lg md:max-w-[800px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum convallis lacus gravida Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, suscipit. Odit excepturi accusamus repellat deleniti. Amet dolore voluptatem blanditiis quo laborum harum porro adipisci iure perferendis mollitia, alias maiores ut.</p>
                    </div>

                </div>
                <div className="flex mt-10 p-1 justify-center flex-row md:flex-col md:space-y-10 md:z-10">
                    <CardSpotlightDemo
                        AboutParaHeading="About me"
                        AboutParaPara="Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum convallis lacus gravida"
                        AboutParaButton="LEARN MORE"

                    />
                    <CardSpotlightDemo
                        AboutParaHeading="My work"
                        AboutParaPara="Purus ut faucibus pulvinar elementum integer enim neque fermentum iaculis eu non diam phasellus dolor consectur"
                        AboutParaButton="BROWS PORTFOLIO"

                    />

                    <div className='hidden md:block'>
                    <div className=' flex text-blue-700 space-x-6 bg-black/40 border border-yellow-500/40 p-3 justify-between rounded-lg  '>
                        <InstagramIcon fontSize="large"/>
                        <LinkedInIcon fontSize="large" />
                        <GitHubIcon fontSize="large"/>
                        <TwitterIcon fontSize="large"/>
                    </div>
                    </div>

                </div>
                <div className="md:hidden bg-white/15 mt-12 m-3 p-[1px]"></div>
                <div className='md:absolute  md:top-40 md:right-70'>
                    <Image
                        src={Img}
                        height={1000}
                        width={1300}
                        alt="this is profile img"
                    />
                </div>
            </div>
            <div>
            </div>
            {/* <div>
                <div className='flex justify-center items-center mt-6 w-24 bg-yellow-50/90 p-8 rounded-full text-black/75 font-bold text-xl'>&lt;/&gt;</div>
            </div> */}
        </div>
    )
}

export default Herosec