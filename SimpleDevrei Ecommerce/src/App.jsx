import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import { Home } from './pages/Home'
import { CheckoutPage } from './pages/CheckoutPage'
import { Orders } from "./pages/Orders";
import { Tracking } from "./pages/Tracking";

function App(){
  return(
      <Routes>
        <Route index element={<Home />}/>
        <Route path='Checkout' element={<CheckoutPage />}/>
        <Route path='Orders' element={<Orders />}/>
        <Route path='Tracking' element={<Tracking />}/>
      </Routes> 
  );
}
export default App
