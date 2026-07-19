import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import { Home } from './pages/Home'
import { Checkout } from './pages/checkout/Checkout'
import { Orders } from "./pages/Orders";
import { Tracking } from "./pages/Tracking";
import { NotFound } from "./pages/NotFound";

function App(){
  return(
      <Routes>
        <Route index element={<Home />}/>
        <Route path='Checkout' element={<Checkout />}/>
        <Route path='Orders' element={<Orders />}/>
        <Route path='Tracking' element={<Tracking />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes> 
  );
}
export default App
