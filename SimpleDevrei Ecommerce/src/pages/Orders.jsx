import '../index.css'
import { Link } from 'react-router-dom'
import SimpleDevreiLogoLarge from '../assets/SimpleDevreiLogoLarge.png'
import search from '../assets/search.png'
import cart from '../assets/cart-icon.png'

export function Orders(){
    return(
        <>
            <title>Orders</title>

            <header className="bg-[rgb(8,79,45)] w-full fixed top-0 z-5">
							<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
									<div className="flex justify-between items-center gap-4 h-18">
											{/* Container Logo */}
											<div className=" flex justify-start items-center shrink-0">
													<Link to="/" className="hidden lg:flex items-center font-arial text-[21px] font-medium">
															<img className="w-14 cursor-pointer" src={SimpleDevreiLogoLarge} alt="SimpleDevrei" />
															<span className='text-white'>SimpleDevrei</span>
													</Link>
													<Link to="/" className="hidden md:block lg:hidden">
															<img className="w-12 cursor-pointer" src={SimpleDevreiLogoLarge} alt="SimpleDevrei" />
													</Link>
											</div>

											{/* Search Bar */}
											<div className='flex grow max-w-3xl'>
													<input className="bg-white grow w-0 rounded-l-lg border-0 text-[16px] h-9.75 font-roboto pl-4 placeholder-gray-500 focus:outline-0" type="text" placeholder="Search" />
													<button className='bg-white w-11.25 shrink-0 rounded-r-lg cursor-pointer flex justify-center items-center'>
															<img className='h-4.5 mr-2' src={search} alt="Search" />
													</button>
											</div>

											{/* Cart */}
											<div className="shrink-0 flex justify-end gap-2">
													<Link className="text-white flex items-center border border-transparent px-3 py-2 header-link hover:border-white" to="/Orders">
															<span className="block text-[15px] font-semibold">Orders</span>
													</Link>

													<Link className="text-white flex items-center px-3 py-2 relative border border-transparent hover:border-white" to="/Checkout">
															<img className="w-9" src={cart} />
															<div className="text-[14px] text-center font-semibold text-[rgb(8,79,45)] absolute top-1.75 right-14.5">3</div>
															<div className="ml-1.25">Cart</div>
													</Link>
											</div>
									</div>
							</div>
					</header>

					<main className='mt-25'>
						<section className='w-full'>
							<div className='orders-page max-w-[850px]: lg:max-w-7xl font-roboto mx-auto px-4 md:px-6 lg:px-8'>
								{/* Page Title */}
								<div className='font-bold text-[26px] mb-7'>Your Orders</div>

								{/* Orders Grid */}
								<div className='grid grid-cols-1 gap-y-12.5'>
									<div className='order-container'>
										{/* Order Header */}
										<div className='order-header bg-white border border-[rgb(222,222,222)] flex items-center justify-between px-6.5 py-5 rounded-t-[5px]'>
											{/* Order Header Left */}
											<div className='shrink-0 flex order-header-left-section'>
												{/* Order Date */}
												<div className='order-date mr-11.5'>
													<div className="font-bold text-[17px] order-header-label">Order Placed:</div>
													<div>August 12</div>
												</div>
												<div className='order-total mr-11.5'>
													<div className="font-bold text-[17px] order-header-label">Total:</div>
													<div className='font-roboto'>$55.90</div>
												</div>
											</div>
											{/* Order Header Right */}
											<div className='shrink order-header-right-section'>
												<div className="font-bold text-[17px] order-header-label">Order ID:</div>
												<div>27cba69d-4c3d-4098-b42d-ac7fa62b7664</div>
											</div>
										</div>

										{/* Order Details Grid */}
										<div className='order-details-grid px-10 py-6.5 border-t-0 border-l border border-[rgb(222,222,222)] rounded-b-[5px] grid grid-cols-[110px_1fr_220px] gap-9 gap-y-14.5 items-center'>
											<div className="product-image-container text-center">
												<img className='max-w-25.5 max-h-27.5' src="images/products/athletic-cotton-socks-6-pairs.jpg" alt='Product'/>
											</div>

											<div className="product-details">
												<div className="product-name font-bold mb-1.5">
													Black and Gray Athletic Cotton Socks - 6 Pairs
												</div>
												<div className="product-delivery-date mb-1">
													Arriving on: August 15
												</div>
												<div className="product-quantity mb-2">
													Quantity: 1
												</div>
												<button className="buy-again-button button-primary flex items-center justify-center  h-9 w-35 text-[14px] p-1 rounded-[5px] bg-[rgb(25,135,84)] text-white border-transparent border shadow shadow-[rgba(220,220,220,0.5)] cursor-pointer hover:bg-[rgba(25,135,84,0.75)] ">
													<img className="buy-again-icon w-5 mr-2.5" src="images/icons/buy-again.png" />
													<span className="buy-again-message">Add to Cart</span>
												</button>
											</div>

											{/* Product Action */}
											<div className="product-actions items-start">
												<Link to="/Tracking">
													<button className="track-package-button button-secondary w-full text-[15px] border border-[rgb(221,221,221)] rounded-[5px] p-2 cursor-pointer hover:bg-[rgba(221,221,221,0.26)]">
														Track package
													</button>
												</Link>
											</div>

										</div>
									</div> {/* Order Container */}

								</div>
							</div>

						</section>
					</main>
        </>
    );
}