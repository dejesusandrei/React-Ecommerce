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

	useEffect(() =>{
		async function loadProduct(){
			try {
				// Promise All: sabay irequest ng browser anf two API sa backend
				const [resProduct, resCartItem] = await Promise.all(
					[
						axios.get('/api/products'),
						axios.get('/api/cart-items')
					]
				);
				setProducts(resProduct.data);
				setCart(resCartItem.data);
			} catch (error) {
				console.error('Failed to update the products: ', error);
			}
		}
		loadProduct();
	}, []);

  return(
      <Routes>
        <Route index element={<Home cart={cart} products={products}/>}/>
        <Route path='Checkout' element={<Checkout cart={cart}/>}/>
        <Route path='Orders' element={<Orders cart={cart}/>}/>
        <Route path='Tracking' element={<Tracking />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes> 
  );
}
export default App
