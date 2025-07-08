import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './assets/Pages/Home';
import Successs from './assets/Pages/Successs';
import Error from './assets/Pages/Error';
import ProtectedRoute from './Componenet/ProtectedRoute';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/success" element= {<ProtectedRoute element={<Successs/>}/>}/>
      <Route path="/Error" element= {<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}


export default App