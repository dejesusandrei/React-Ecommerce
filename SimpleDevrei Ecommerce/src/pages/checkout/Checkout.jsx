import '../../index.css'
import { CheckoutHeader } from './CheckoutHeader'
import { Cart } from '../../components/Cart';

export function Checkout({cart}){
	return(
			<>
				<title>Checkout</title>

				<CheckoutHeader cart={cart}/>

				<main className='mt-36 px-4'>
					<section className='w-full'>
						<div className='max-w-125 lg:max-w-7xl  mx-auto font-roboto px-4 md:px-6 lg:px-8'>
							<div className='font-bold text-[22px] mb-5'>Review your order</div>
							<Cart cart={cart}/>
						</div>
					</section>
				</main>
			</>
	);
}
