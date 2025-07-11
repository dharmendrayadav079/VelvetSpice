import React from 'react'
import { Link } from "react-router-dom";

import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/Slices/Search'

const Navbar = () => {
  const dispatch = useDispatch();
  return (
  
    <nav className="flex felx-col lg:flex-row justify-between py-3 mx-6 mb-10">
        <div>
          
            <h1 className='text-2xl font-bold'>Velvet-Spicy</h1>
            
            <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0,16) }</h3>
            
        </div>
        <div className='flex justify-between space-x-4 ml-150'>
        <div className='flex items-center justify-between'>
           <Link className='text-xl font-bold text-gray-600 ' to="/login">Login</Link> </div>
           <div className='flex items-center justify-between'>
                 <Link className='text-xl font-bold text-gray-600 ' to="/signup">Sign Up</Link>

        </div>
        <div className='flex items-center justify-between'>
          <Link className='text-xl font-bold text-gray-600 ' to="/contact">Contact Us</Link>
        </div>
        </div>
        <div>
            <input type="search" name="search" id="" placeholder='Search here'autoComplete='off'
            onChange={(e)=> dispatch(setSearch(e.target.value))}
            className='p-3 border border-grey-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]' 
             />
        </div>
    </nav>
  )
}

export default Navbar