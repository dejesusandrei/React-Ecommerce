import '../index.css'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Products } from '../components/Product';
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios';

export function Home({cart, loadCart}){
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchParams] = useSearchParams();
	// tinitingnan kung may nakasulat na search sa URL
	// Kung ang URL ay "?search=shoes" -> search = "shoes"
  const search = searchParams.get('search');

	useEffect(() =>{
		async function getHomeData() {
			try {
				setIsLoading(true);
				const urlPath = search ? `/api/products?search=${search}` : '/api/products';
				const res = await axios.get(urlPath);
				setProducts(res.data);
				setIsLoading(false);
			} catch (error) {
				console.error("Error fetching products:", error);
			}
		}
		getHomeData();
	}, [search]);

	return (
		<>
			<title>Home</title>
			
			<Header cart={cart}/>

			<main className='mt-18'>
				<section className='w-full'>
					<div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
						{isLoading ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">Loading products...</p>
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-2xl font-semibold text-gray-700">
                  {search ? `No products found for "${search}"` : 'No products available.'}
                </p>
                <p className="text-gray-500 mt-2">
                  Try checking for spelling errors or search for another item.
                </p>
              </div>
            ) : (
              <Products products={products} loadCart={loadCart}/>
            )}
					</div>
				</section>
			</main>
		</>
  );
}