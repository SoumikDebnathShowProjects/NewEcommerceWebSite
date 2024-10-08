import React from 'react'
import Logo from './Logo'
import { IoSearchOutline } from "react-icons/io5";
import { LuUserCircle } from "react-icons/lu";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white fixed w-full z-40'>
      <div className=' h-full container mx-auto flex items-center px-4 justify-between'>
            <div className=''>
                <Link to={"/"}>
                    <Logo w={90} h={50}/>
                </Link>
            </div>

            <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
              <input type="text" placeholder='search product here...' />
              <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
                <IoSearchOutline />
                </div>
            </div>
             <div className='flex items-center gap-7'>
                
                <div className='text-3xl cursor-pointer relative flex justify-center'>
                <LuUserCircle />
                </div>


        <div className='text-2xl relative'>
                    <span>   <TiShoppingCart /></span>
                    <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                        <p className='text-sm'>0</p>
                    </div>
        </div>




        <div>
          <Link to={'/login'} className='px-3 py-2 rounded-full text-white  bg-red-600 hover:bg-red-700'>Login</Link>
                
                </div>


        </div>

    </div>
    </header>
  )
}

export default Header
