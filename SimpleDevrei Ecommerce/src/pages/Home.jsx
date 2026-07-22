import '../index.css'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Products } from '../components/Product';
import { useState, useEffect } from 'react'
import axios from 'axios';

export function Home({cart, products}){

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