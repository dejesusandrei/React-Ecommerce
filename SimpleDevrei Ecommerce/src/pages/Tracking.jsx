import '../index.css'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header' 
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FormatDay } from "../utils/date"
import axios from 'axios'
import dayjs from 'dayjs'

export function Tracking({cart}){
  const { orderId, productId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() =>{
    async function loadOrder(){
      try {
        const res = await axios.get(`/api/orders/${orderId}?expand=products`);
        setOrder(res.data);
      } catch (error) {
        console.error('Failed to get the orders: ', error);
      }
    }
    loadOrder();
  }, [orderId]);

  if(!order) return null;

  const orderProduct = order.products.find((orderProduct) => orderProduct.productId == productId);

  // Calculate the arrival of the product
  const totalDeliveryTimeMs = orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
  const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
  let deliveryPercent = (timePassedMs / totalDeliveryTimeMs) * 0.3;
  if (deliveryPercent > 100) deliveryPercent = 100;

  return(
      <>
        <title>Tracking</title>
        
        <Header cart={cart}/>

        <main className='mt-25'>
          <section className='w-full'>
            <div className='tracking-page  max-w-[850px]: lg:max-w-6xl font-roboto mx-auto px-4 md:px-6 lg:px-8'>
              <div className="order-tracking p-5">
                <Link className="back-to-orders-link link-primary inline-block mb-8 text-[17px] underline decoration-[rgb(25,135,84)] text-[rgb(25,135,84)] hover:opacity-[0.75]" to="/Orders">View all orders</Link>
                <div className="delivery-date">{`${deliveryPercent >= 100 ? 'Delivered on' : 'Arriving on'}`} {FormatDay(orderProduct.estimatedDeliveryTimeMs)}</div>
                <div className="product-info">{orderProduct.product.name}</div>
                <div className="product-info">Quantity: {orderProduct.quantity}</div>

                <img className="product-image" src={`/${orderProduct.product.image}`} alt={orderProduct.product?.name} />

                <div className="progress-labels-container">
                  <div className={`progress-label ${deliveryPercent < 33 && 'current-status'}`}>
                    Preparing
                  </div>
                  <div className={`progress-label ${deliveryPercent >= 33 && deliveryPercent < 100 && 'current-status'}`}>
                    Shipped
                  </div>
                  <div className={`progress-label ${deliveryPercent === 100 && 'current-status'}`}>
                    Delivered
                  </div>
                </div>

                <div className="progress-bar-container">
                  <div className="progress-bar" style={{width: `${deliveryPercent}%`}}></div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
  );
}