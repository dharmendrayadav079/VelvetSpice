import React from 'react'
import Navbar from '../../Component/Navbar'
import CategoryMenu from '../../Component/CategoryMenu';
import FoodItems from '../../Component/FoodItems';
import Cart from '../../Component/Cart';

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