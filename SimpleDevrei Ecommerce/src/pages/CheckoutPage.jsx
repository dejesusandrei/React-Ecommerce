import '../index.css'
import { Link } from 'react-router-dom'
import SimpleDevreiLogoGreen from '../assets/SimpleDevreiLogoGreen.png'
import checkoutLockIcon from '../../public/images/icons/checkout-lock-icon.png'

export function CheckoutPage(){
	return(
			<>
				<title>Checkout</title>

				<header className="w-full fixed top-0 z-5 bg-white">
					<div className='w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
						<div className='flex justify-between font-roboto items-center h-18'>
							{/* Container Logo */}
							<div className=" flex justify-start items-center shrink-0">
								<Link to="/" className="hidden lg:flex items-center font-arial text-[21px] font-medium">
									<img className="w-13 cursor-pointer" src={SimpleDevreiLogoGreen} alt="SimpleDevrei" />
									<span className='text-[rgb(8,79,45)]'>SimpleDevrei</span>
								</Link>
								<Link to="/" className="block lg:hidden">
									<img className="w-13 cursor-pointer" src={SimpleDevreiLogoGreen} alt="SimpleDevrei" />
								</Link>
							</div>

							{/* Checkout */}
							<div className='flex justify-center text-[22px] font-medium grow shrink-0 text-center'>
								Checkout (<Link to="/" className='text-[rgb(25,135,84)] cursor-pointer'>3 items</Link>)
							</div>

							<div className='text-right flex items-center justify-end shrink-0 cursor-pointer'>
								<img className='h-8' src={checkoutLockIcon} alt="Checkout Lock" />
							</div>
						</div>
					</div>
				</header>

				<main className='mt-36 px-4'>
					<section className='w-full'>
						<div className='max-w-125 lg:max-w-7xl  mx-auto font-roboto px-4 md:px-6 lg:px-8'>
							<div className='font-bold text-[22px] mb-5'>Review your order</div>
							{/* Checkout Grid */}
							<div className='grid grid-cols-1 lg:grid-cols-[1fr_350px] items-start gap-3'>
								{/* Order Summary */}
								<div>
									<div className='border border-[rgb(222,222,222)] rounded-sm p-5 mb-3'>
										{/* Delivery Date */}
										<div className="text-[rgb(25,135,84)] font-bold mt-1.5 mb-6 text-[19px]">
											Delivery date: Tuesday, June 21
										</div>
										{/* Cart Item Grid */}
										<div className='grid grid-cols-[100px_1fr] lg:grid-cols-[100px_1fr_1fr] gap-6'>
											<img className='max-w-full max-h-32 mx-auto' src="../../public/images/products/athletic-cotton-socks-6-pairs.jpg" alt="Socks" />
											
											<div className='cart-item-details'>
												<div className="font-bold mb-2 ">
													Black and Gray Athletic Cotton Socks - 6 Pairs
												</div>
												<div className="font-bold mb-2">
													$10.90
												</div>
												<div className="product-quantity">
													<span>
														Quantity: <span className="quantity-label">2</span>
													</span>
													<span className="update-quantity-link ml-1.5 text-[rgb(25,135,84)] hover:opacity-[0.75] cursor-pointer">
														Update
													</span>
													<span className="delete-quantity-link ml-1.5 text-[rgb(25,135,84)] hover:opacity-[0.75] cursor-pointer">
														Delete
													</span>
												</div>
											</div>

											<div className='delivery-options max-[1024px]:col-[1/span_2]'>
												<div className='font-bold mb-3'>Choose a delivery option:</div>
												{/* Delivery Option */}
												<div className='grid grid-cols-[26px_1fr] mb-3 cursor-pointer'>
													<input className='mt-0.5 mr-1.5' type="radio" name='deliery-option-1'/>
													<div>
														<div className="font-medium mb-1">
															Tuesday, June 21
														</div>
														<div className="text-[rgb(120,120,120)] text-[15px]">
															FREE Shipping
														</div>
													</div>
												</div>
												<div className='grid grid-cols-[26px_1fr] mb-3 cursor-pointer'>
													<input className='mt-0.5 mr-1.5' type="radio" name='deliery-option-1'/>
													<div>
														<div className="font-medium mb-1">
															Wednesday, June 15
														</div>
														<div className="text-[rgb(120,120,120)] text-[15px]">
															$4.99 - Shipping
														</div>
													</div>
												</div>
												<div className='grid grid-cols-[26px_1fr] mb-3 cursor-pointer'>
													<input className='mt-0.5 mr-1.5' type="radio" name='deliery-option-1'/>
													<div>
														<div className="font-medium mb-1">
															Monday, June 13
														</div>
														<div className="text-[rgb(120,120,120)] text-[15px]">
															$9.99 - Shipping
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>


									{/* Payment Summary */}
									<div className='border border-[rgb(222,222,222)] max-[1024px]:row-start-1 max-[1024px]:mb-3 rounded-sm p-5'>
										<div className="font-bold text-[18px] mb-3">Payment Summary</div>
										
										<div className="grid grid-cols-[1fr_auto] text-[15px] mb-3">
											<div>Items (3):</div>
											<div className="text-right">$42.75</div>
										</div>

										<div className="grid grid-cols-[1fr_auto] text-[15px] mb-3">
											<div>Shipping &amp; handling:</div>
											<div className="text-right">$4.99</div>
										</div>

										<div className="grid grid-cols-[1fr_auto] text-[15px] mb-3">
											<div>Total before tax:</div>
											<div className="text-right border-t border-t-[rgb(222,222,222)]">$4.99</div>
										</div>

										<div className="grid grid-cols-[1fr_auto] text-[15px] mb-3">
											<div>Estimated tax (10%):</div>
											<div className="text-right">$4.77</div>
										</div>

										<div className="grid grid-cols-[1fr_auto] text-[rgb(25,135,84)] font-bold text-[18px] pt-4.5 mb-3 border-t border-t-[rgb(222,222,222)]">
											<div>Order total:</div>
											<div className="text-right">$108.77</div>
										</div>

										<button className="w-full text-[15px] p-1.75 mt-2 rounded-[5px] bg-[rgb(25,135,84)] text-white border-transparent border shadow shadow-[rgba(220,220,220,0.5)] cursor-pointer hover:bg-[rgba(25,135,84,0.75)]">
											Place your order
										</button>
									</div>
							</div>

						</div>
					</section>
				</main>
			</>
	);
}