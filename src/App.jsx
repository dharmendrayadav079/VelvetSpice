import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './assets/Pages/Home';
import Successs from './assets/Pages/Successs';
import Error from './assets/Pages/Error';
import ProtectedRoute from './Component/ProtectedRoute';
import Login from './Component/Login'
import Signup from './Component/Signup';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import ChatBot from './Component/ChatBot';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/success" element= {<ProtectedRoute element={<Successs/>}/>}/>
      <Route path="/Error" element= {<Error/>}/>
      <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    <ChatBot />
    <Footer/>
    </BrowserRouter>
  )
}


export default App