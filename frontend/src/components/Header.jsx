import React from 'react'
import Logo from './Logo'
import { IoSearchOutline } from "react-icons/io5";
import { LuUserCircle } from "react-icons/lu";

const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white fixed w-full z-40'>

    <div className=' h-full container mx-auto flex items-center px-4 justify-between'>
          <div className=''>
              
                    <Logo w={90} h={50}/>
                
            </div>
            <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
              <input type="text" placeholder='search product here...' />
              <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
                <IoSearchOutline />
                </div>
            </div>
            <div>
            <LuUserCircle />
            </div>
    </div>
    </header>
  )
}

export default Header
