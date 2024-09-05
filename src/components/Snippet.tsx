import { GlobeDemo } from '@/ui-components/gloab'
import { HeroParallaxDemo } from '@/ui-components/Snippetcompo'
import React from 'react'

const Snippet = () => {
  return (
    <div className='text-black pt-5 bg-black '>
        <h2>SNIPPET</h2>
        <div>
        <GlobeDemo/>
            {/* <HeroParallaxDemo/> */}
        </div>
    </div>
  )
}

export default Snippet