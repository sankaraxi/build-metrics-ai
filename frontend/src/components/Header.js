import React from 'react'
import { LOGO } from '../utils/constants'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='fixed w-full z-30 xl:py-5'>
        <div className='mx-2 z-50 xl:mx-12 px-4 xl:px-10 bg-white flex items-center justify-between bg-opacity-85 rounded-full shadow-md'>
            <div>
                <img 
                    src={LOGO}
                    className='w-64 xl:w-72'
                    alt='logo'
                />
            </div>
            <div className='flex items-center gap-2'>
                <div className='hidden xl:flex'>
                    <Nav />
                </div>
                <div>
                    <span>Dark mode</span>
                </div>

                
            </div>
        </div>
    </div>
    
  )
}

export default Header