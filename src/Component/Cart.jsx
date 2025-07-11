import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import ItemCart from './ItemCart';
import { useSelector } from 'react-redux';
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const [activeCart,setActiveCart] = useState(false);


   const cartItems = useSelector((state) => state.cart.cart);

  const totalQty = cartItems.reduce((totalQty,item)=>totalQty+item.qty,0 )
  const totalPrice = cartItems.reduce((total,item)=> total + item.qty *item.price,0 
);
const navigate= useNavigate();
  return (
    <>
    <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3 ${activeCart ? 
          "translate-x-0 ": "translate-x-full"} transition-all duration-500 z-50`}>
        <div className='flex justify-between  items-center my-3' >
            <span className='text-xl font-bold text-gray-800 '>My Orders</span>
            <IoIosCloseCircle onClick={()=> setActiveCart(!activeCart)} className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text:red-300 hover:border-red-300 cursor-pointer '/>
        </div>
        
          {cartItems.length>0 ? cartItems.map((food)=>{
            return(
            <ItemCart key={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty} />
            );
            
        } ): <h2 className='text-center font-bold text=xl text-gray-800'> Your cart is Empty </h2>}
        
        
        
        <div className='absolute bottom-0'>
              <h3 className='font-semibold text-gray-800'>Items:{totalQty} </h3>
              <h3 className='font-semibold text-gray-800'> Total Amount:₹{totalPrice} </h3>
                <hr className='w-[90vw] lg:w-[19vw] my-2 '/>
                  <button onClick = {()=>navigate("/success")}  className='bg-green-500 font-bold px-3 text-white py-2 lg:rounded-lg w-[18vw] cursor-pointer '>Checkout</button>
 </div>

 </div>
 
 <IoCartOutline onClick={()=>setActiveCart(!activeCart)} className={`rounded-full bg-white shadow-md text-5xl pd-3 fixed bottom-4 right-4 hover:cursor-pointer ${totalQty > 0&& "animate-bounce delay-500 transition-all" }`}/>
    </>
  )
}

export default Cart;