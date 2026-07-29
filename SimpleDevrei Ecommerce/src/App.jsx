import { useState, useEffect } from 'react'
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home'
import { Checkout } from './pages/checkout/Checkout'
import { Orders } from "./pages/Orders";
import { Tracking } from "./pages/Tracking";
import { NotFound } from "./pages/NotFound";


function App(){
  const [cart, setCart] = useState([]);

	async function loadCart(){
		try {
			// Promise All: sabay irequest ng browser anf two API sa backend
			const resCartItem = await axios.get('/api/cart-items?expand=product')
			setCart(resCartItem.data);
		} catch (error) {
			console.error('Failed to update the products: ', error);
		}
	}

	useEffect(() =>{
		loadCart();
	}, []);

  return(
		<Routes>
			<Route index element={<Home cart={cart} loadCart={loadCart}/>}/>
			<Route path='Checkout' element={<Checkout cart={cart} loadCart={loadCart}/>}/>
			<Route path='Orders' element={<Orders cart={cart} loadCart={loadCart}/>}/>
			<Route path="/Tracking/:orderId/:productId" element={<Tracking cart={cart} loadCart={loadCart}/>}/>
			<Route path='*' element={<NotFound cart={cart} loadCart={loadCart}/>}/>
		</Routes> 
  );
}
export default App
