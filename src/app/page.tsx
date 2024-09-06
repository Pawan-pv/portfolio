import {  Roboto } from 'next/font/google'
import Nav from './components/Nav';

 
const roboto = Roboto({ weight:"700" , subsets:["cyrillic"]})

export default function Home() {
  return (<div className={`${roboto.className} bg-[#222831] h-screen text-yellow-300 pl-3 pr-3 md:pr-20  md:pl-20`}>
    
    <div className="border">
     <Nav/>
     ksandksandik
     <br />sadjsa js ds

    </div>
  </div>
  );
}
