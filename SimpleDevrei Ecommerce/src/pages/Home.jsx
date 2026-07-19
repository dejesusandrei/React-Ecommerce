import '../index.css'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Products } from '../components/Product';

export function Home(){
	return (
		<>
			<title>Home</title>
			
			<Header />

			<main className='mt-18'>
				<section className='w-full'>
					<div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
						<Products />
					</div>
				</section>
			</main>
		</>
  );
}