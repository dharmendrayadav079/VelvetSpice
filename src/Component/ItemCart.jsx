import React from 'react'
import { IoAdd } from "react-icons/io5";
import { CiSquareMinus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {removeFromCart,incrementQty,decrementQty} from "../redux/Slices/CartSlice";

const ItemCart = ({ id,name, qty, price,img} ) => {
  const Disptach =useDispatch();
  return (
    <div className='flex  gap-2 shadow-md rounded-lg p-2 mb-3'>
        <MdDelete onClick={()=>Disptach(removeFromCart({id,img,name,price,qty}))}className='absolute right-7 text=grat-700 cursor-pointer'/>
        <img src={img}
     alt="" 
     className='w-[50px] h-[50px]'
     />
     <div  className='leading-5'>
        <h2 className='font-bold text-gray-800'>{name}</h2>
        <div className='flex justify-between '>
            <span className='text-green-500 font-bold'>₹{price}</span>
            <div className='flex justify-center items-center gap-2 absolute right-7 '>
               <CiSquareMinus  onClick={() =>
                qty > 0 ? Disptach(decrementQty({ id })) : (qty = 0)
              }className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md pd-1 text-xl transition-all ease-linear cursor-pointer'/>
            <span>{qty}</span>
            <IoAdd onClick={() =>
                qty >= 1 ? Disptach(incrementQty({ id })) : (qty = 0)
              }  className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md pd-1 text-xl transition-all ease-linear cursor-pointer'/>
           
            </div>
        </div>
     </div>
    </div>
  )
}

export default ItemCart