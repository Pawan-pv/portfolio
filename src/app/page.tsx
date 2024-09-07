import { Roboto } from 'next/font/google'
import Nav from '../my-components/Nav';
import HomeProfile from "../my-components/HeroSec"

const roboto = Roboto({ weight: "700", subsets: ["cyrillic"] })

export default function Home() {
  return (<div className={`${roboto.className} bg-slate-900 min-h-screen text-yellow-300 px-3 md:px-20`}>
    {/* bg-[#222831]  */}
    
    <Nav />
  
    <div className="pt-8 space-y-8">
      {/* This is the small white box (likely a decorative element) */}
      <div className="bg-white p-[3px] max-w-44 rounded-sm"></div>
  
      {/* Introduction Section */}
      <div className="space-y-3">
        <h1 className="text-4xl">I’m John, a Web Developer</h1>
        <p className="text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus nihil error magni praesentium sit optio! Saepe tempora temporibus laboriosam vel officiis deserunt ipsum nostrum corrupti suscipit, omnis obcaecati quasi nam?
        </p>
      </div>
  
      {/* Blue circle or decorative element */}
      <div className="bg-blue-600 p-12 w-20 h-20 rounded-full"></div>
  
      {/* About Me Section */}
      <div className="flex space-x-4">
        <div className="space-y-4">
          <h3 className="text-xl">ABOUT ME</h3>
          <p className='text-gray-300' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestias labore velit, necessitatibus esse ut ad porro nam quam molestiae maxime obcaecati quisquam distinctio, tenetur laborum. Distinctio earum nihil eveniet?
          </p>
         <div>
         <span className=" text-xl border-b-4 pb-3 border-b-gray-400">LEARN MORE</span>
         </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl">ABOUT ME</h3>
          <p className='text-gray-300' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestias labore velit, necessitatibus esse ut ad porro nam quam molestiae maxime obcaecati quisquam distinctio, tenetur laborum. Distinctio earum nihil eveniet?
          </p>
         <div>
         <span className=" text-xl border-b-4 pb-3 border-b-gray-400">LEARN MORE</span>
         </div>
        </div>
      </div>
       <div className='bg-slate-950 border-t-2 border-t-gray-700 pt-6'>
        {/* HomeSec Component */}
       <HomeProfile />
       </div>
    </div>
  </div>
  

  );
}
