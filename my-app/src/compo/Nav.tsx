import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
const Nav = ({
  NavField,
  sideNavVisible,
  isSideNavVisible
}:
  {
    NavField: string[],
    sideNavVisible: boolean,
    isSideNavVisible: React.Dispatch<React.SetStateAction<boolean>>
  }) => {
  return (
    <>
      <nav className="flex justify-between p-6 border-b-4 border-b-white/65 fixed top-0 left-0 right-0 w-full bg-blue-950 text-white font-mono fill-neutral-300 z-40 ">
        <div className="font-bold text-xl">coder@#@</div>
        <div className="font-semibold hidden md:block">
          <ul className="flex space-x-12">
            {NavField.map((N: string) => (
              <li key={N}>{N}</li>
            ))}
          </ul>
        </div>
        <div onClick={() => (isSideNavVisible(!sideNavVisible))} className="md:hidden transition-opacity"><MenuIcon /></div>
      </nav>

      {/* Side navigation for small screens */}
      <div className="mt-[60px] md:hidden">
        {sideNavVisible && (
          <div className=" max-w-32 text-gray-400/35 h-screen md:hidden mt-2 fixed -top-2 left-0 w-64 z-40 bg-black  ">
            hjdshjdhsad
          </div>
        )}
      </div>
      {/* Content below the nav */}
      <div className="mt-[70px] overflow-hidden">
        {/* Your other page content here */}
      </div>
    </>

  )
}

export default Nav