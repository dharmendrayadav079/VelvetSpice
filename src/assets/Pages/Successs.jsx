import React, { useEffect, useState } from 'react'
import{PropagateLoader} from "react-spinners"


const Successs = () => {
  const [loading,setloading]=useState(true);
  useEffect(()=>  {
    setTimeout(()=>{
       setloading(false);
    },3000);
    
  }, [] )
  return (
    <div className='flex flex-col items-center justify-center h-screen  '>
      {
        loading ?  <PropagateLoader color='#010201'/> :
        <div>
     
      <h2 className='text-3xl font-semibold mb-4 text-center '>Order Successfully! </h2>
      <p>Your order has been Successfully placed...</p>
      </div>

      }
      
    </div>
  )
}

export default Successs