import React from 'react'
import Navbar from '../../Componenet/Navbar'
import CategoryMenu from '../../Componenet/CategoryMenu';
import FoodItems from '../../Componenet/FoodItems';
import Cart from '../../Componenet/cart';

const Home = () => {
  return(
    <>
    <Navbar/>
    <CategoryMenu/>
    <FoodItems/>
    <Cart/>
    
    </>

  );
};

export default Home