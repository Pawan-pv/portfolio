
"use client"
import { useState } from "react";
import Nav from "../compo/Nav"
import Herosec from "@/compo/Herosec"
import React from "react";
import { BentoGridDemo } from "@/compo/Midsec";
// import { CardSpotlightDemo } from "@/compo/AboutCart";


export default function Home() {

  const [sideNavVisible, isSideNavVisible ] = useState<boolean>(false)

  const NavField: string[] = [
    "Home",
    "About",
    "Blog",
    "portfolio"
  ]

  return (
    <>
      <div className="relative overflow-auto h-screen bg-black  ">
         <Nav
         NavField={NavField}
         sideNavVisible={sideNavVisible}
         isSideNavVisible={isSideNavVisible}
         />
          <div className="p-6">
          <Herosec/>
          <BentoGridDemo/>
          </div>
      </div>

    </>
  );
}
