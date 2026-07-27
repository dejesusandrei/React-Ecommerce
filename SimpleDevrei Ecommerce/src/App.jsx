import { useState, useEffect } from 'react'
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home'
import { Checkout } from './pages/checkout/Checkout'
import { Orders } from "./pages/Orders";
import { Tracking } from "./pages/Tracking";
import { NotFound } from "./pages/NotFound";


function App(){
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

	async function loadCart(){
		try {
			// Promise All: sabay irequest ng browser anf two API sa backend
			const [resProduct, resCartItem] = await Promise.all(
				[
					axios.get('/api/products'),
					axios.get('/api/cart-items?expand=product')
				]
			);
			setProducts(resProduct.data);
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
			<Route index element={<Home cart={cart} products={products} loadCart={loadCart}/>}/>
			<Route path='Checkout' element={<Checkout cart={cart} loadCart={loadCart}/>}/>
			<Route path='Orders' element={<Orders cart={cart} loadCart={loadCart}/>}/>
			<Route path="/Tracking/:orderId/:productId" element={<Tracking cart={cart} loadCart={loadCart}/>}/>
			<Route path='*' element={<NotFound cart={cart} loadCart={loadCart}/>}/>
		</Routes> 
  );
}
export default App
