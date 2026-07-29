import { FormatCurrency } from "../utils/money"
import { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FormatDay } from "../utils/date"
import axios from 'axios'

function OrderHeader({order}){
	return(
		<div className='order-header bg-white border border-[rgb(222,222,222)] flex items-center justify-between px-6.5 py-5 rounded-t-[5px]'>
			{/* Order Header Left */}
			<div className='shrink-0 flex order-header-left-section'>
				{/* Order Date */}
				<div className='order-date mr-11.5'>
					<div className="font-bold text-[17px] order-header-label">Order Placed:</div>
					<div>{FormatDay(order.orderTimeMs)}</div>
				</div>
				<div className='order-total mr-11.5'>
					<div className="font-bold text-[17px] order-header-label">Total:</div>
					<div className='font-roboto'>{FormatCurrency(order.totalCostCents)}</div>
				</div>
			</div>
			{/* Order Header Right */}
			<div className='shrink order-header-right-section'>
				<div className="font-bold text-[17px] order-header-label">Order ID:</div>
				<div>{order.id}</div>
			</div>
		</div>
	);
}

function OrdersGrid({order, loadCart}){
	return(
		<div className='order-details-grid px-10 py-6.5 border-t-0 border-l border border-[rgb(222,222,222)] rounded-b-[5px] grid grid-cols-[110px_1fr_220px] gap-9 gap-y-14.5 items-center'>
			{order.products.map((orderProduct) =>{
				const { productId,  quantity, estimatedDeliveryTimeMs, product } = orderProduct;
				const [added, setAdded] = useState(false);

				async function addToCart(){
					try {
						setAdded(true);

						const cartItem ={
							productId,
							quantity: 1
						};
						await axios.post('/api/cart-items', cartItem);
						if (typeof loadCart === 'function') await loadCart();

						setTimeout(() =>{
							setAdded(false);
						}, 2000);
					} catch (error) {
						console.error('Failed to add to cart: ', error);
					}
				};

				return(
					<Fragment key={productId}>
						<div className="product-image-container text-center">
							<img className='max-w-25.5 max-h-27.5' src={`/${product.image}`} alt={product?.name}/>
						</div>

						<div className="product-details">
							<div className="product-name font-bold mb-1.5">
								{product.name}
							</div>
							<div className="product-delivery-date mb-1">
								Arriving on: {FormatDay(estimatedDeliveryTimeMs)}
							</div>
							<div className="product-quantity mb-2">
								Quantity: {quantity}
							</div>
							<button 
							onClick={addToCart}
							className="buy-again-button button-primary flex items-center justify-center  h-9 w-35 text-[14px] p-1 rounded-[5px] bg-[rgb(25,135,84)] text-white border-transparent border shadow shadow-[rgba(220,220,220,0.5)] cursor-pointer hover:bg-[rgba(25,135,84,0.75)] ">
								{added ? (
									<>
										<img className="h-6 mr-2" src="../../public/images/icons/check-white.svg" />
										<span>Added</span>
									</>
								):(
									<>
										<img className="buy-again-icon w-5 mr-2.5" src="images/icons/buy-again.png" />
										<span className="buy-again-message">Add to Cart</span>
									</>
								)}

							</button>
						</div>

						<div className="product-actions flex flex-col gap-y-3.5">
							<Link to={`/Tracking/${order.id}/${productId}`}>
								<button className="track-package-button button-secondary w-full text-[15px] border border-[rgb(221,221,221)] rounded-[5px] p-2 cursor-pointer hover:bg-[rgba(221,221,221,0.26)]">
									Track package
								</button>
							</Link>
							{/* <Link to={`/Tracking/${order.id}/${productId}`}>
								<button className="track-package-button bg-red-600 text-white button-secondary w-full text-[15px] border border-red-700 rounded-[5px] p-2 cursor-pointer hover:opacity-[0.75]">
									Cancel Package
								</button>
							</Link> */}
						</div>
					</Fragment>
				);
			})}
		</div>
	);
}

function OrderList({orders, loadCart}){
	return(
		<>
			{orders.map((order) =>{
				return(
					<div className='order-container' key={order.id}>
						<OrderHeader order={order}/>
						<OrdersGrid order={order} loadCart={loadCart}/>
					</div>
				);
			})}
		</>
	);
}

export function Order({loadCart}){
	const [orders, setOrders] = useState([]);

	useEffect(() =>{
		async function loadOrders() {
			try {
				const res = await axios.get('/api/orders?expand=products');
				setOrders(res.data);
			} catch (error) {
				console.error('Failed to update the orders: ', error);
			}
		}
		loadOrders();
	}, []);

	return(
		<div className='grid grid-cols-1 gap-y-12.5'>
			<OrderList orders={orders} loadCart={loadCart}/>
		</div>
	);
}