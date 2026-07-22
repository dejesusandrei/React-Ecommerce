import { NavLink } from 'react-router-dom'
import SimpleDevreiLogoGreen from '../../assets/SimpleDevreiLogoGreen.png'

export function CheckoutHeader({cart}){
	const totalQuantity = cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
  return(
		<>
			<header className="w-full fixed top-0 z-5 bg-white">
				<div className='w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
					<div className='flex justify-between font-roboto items-center h-18'>
						{/* Container Logo */}
						<div className=" flex justify-start items-center shrink-0">
							<NavLink to="/" className="hidden lg:flex items-center font-arial text-[21px] font-medium">
								<img className="w-13 cursor-pointer" src={SimpleDevreiLogoGreen} alt="SimpleDevrei" />
								<span className='text-[rgb(8,79,45)]'>SimpleDevrei</span>
							</NavLink>
							<NavLink to="/" className="block lg:hidden">
								<img className="w-13 cursor-pointer" src={SimpleDevreiLogoGreen} alt="SimpleDevrei" />
							</NavLink>
						</div>

						{/* Checkout */}
						<div className='flex justify-center text-[22px] font-medium grow shrink-0 text-center'>
							Checkout (<NavLink to="/Checkout" className='text-[rgb(25,135,84)] cursor-pointer'>{totalQuantity} items</NavLink>)
						</div>

						<div className='text-right flex items-center justify-end shrink-0 cursor-pointer'>
							<img className='h-8' src="/images/icons/checkout-lock-icon.png" alt="Secure Checkout" />
						</div>
					</div>
				</div>
			</header>
		</>
  );
}