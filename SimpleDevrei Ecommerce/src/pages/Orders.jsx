import '../index.css'
import { Header } from '../components/Header' 
import { Order } from '../components/Order';

export function Orders({cart}){
	return(
		<>
			<title>Orders</title>

			<Header cart={cart}/>

			<main className='mt-25'>
				<section className='w-full'>
					<div className='orders-page max-w-[550px]: lg:max-w-5xl font-roboto mx-auto px-4 md:px-6 lg:px-8'>
						{/* Page Title */}
						<div className='font-bold text-[26px] mb-7'>Your Orders</div>
						<Order />
					</div>

				</section>
			</main>
		</>
	);
}