import React from 'react'
import {assets} from '../assets/assets.js'
const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>Header
        <div className='text-center mt-20 mb-8'>
            <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16
        text-gray-700'>Your own <span className='text-primary'>blogging</span> <br/>platform
        </h1>
        <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs
        text-gray-500'>This is your space to think out loud,to share what matters,and to write without filter.whether it's one word or a thousand,
        your story starts right here.</p>
       
        </div>
        <img src={assets.gradientBackground}alt="" className='absolute -top-50 -z-1
        opacity-70'/>
        
    </div>

  )
}

export default Header