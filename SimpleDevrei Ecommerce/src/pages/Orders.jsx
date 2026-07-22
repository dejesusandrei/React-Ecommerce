import '../index.css'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header' 

export function Orders({cart}){
    return(
        <>
          <title>Orders</title>

          <Header cart={cart}/>

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