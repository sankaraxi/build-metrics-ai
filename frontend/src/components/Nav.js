import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {



  return (
    <div>
        <Link to='/about'>
            <h1 className='cursor-pointer text-black hover:text-gray-400 font-semibold'>About</h1>
        </Link>
        
    </div>
  )
}

export default Nav