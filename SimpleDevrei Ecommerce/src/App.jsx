import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import { Home } from './pages/Home'
import { CheckoutPage } from './pages/CheckoutPage'

function App(){
  return(
      <Routes>
        <Route index element={<Home />}/>
        <Route path='checkout' element={<CheckoutPage />}/>
      </Routes> 
  );
}
export default App
