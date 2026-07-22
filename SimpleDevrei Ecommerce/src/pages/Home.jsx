import '../index.css'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Products } from '../components/Product';
import { useState, useEffect } from 'react'
import axios from 'axios';

export function Home(){
	const [products, setProducts] = useState([]);
		const [cart, setCart] = useState([]);
	
		useEffect(() =>{
			async function loadProduct(){
				try {
					// Promise All: sabay irequest ng browser anf two API sa backend
	
					const [resProduct, resCartItem] = await Promise.all(
						[
							axios.get('http://localhost:3000/api/products'),
							axios.get('http://localhost:3000/api/cart-items')
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

	return (
		<>
			<title>Home</title>
			
			<Header cart={cart}/>

			<main className='mt-18'>
				<section className='w-full'>
					<div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
						<Products products={products}/>
					</div>
				</section>
			</main>
		</>
  );
}