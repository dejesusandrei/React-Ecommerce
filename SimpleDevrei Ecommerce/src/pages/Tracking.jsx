import '../index.css'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header' 

export function Tracking(){
    return(
        <>
          <title>Tracking</title>
					
          <Header />

          <main className='mt-25'>
            <section className='w-full'>
              <div className='tracking-page  max-w-[850px]: lg:max-w-6xl font-roboto mx-auto px-4 md:px-6 lg:px-8'>
                <div className="order-tracking p-5">
                  <Link className="back-to-orders-link link-primary inline-block mb-8 text-[17px] underline decoration-[rgb(25,135,84)] text-[rgb(25,135,84)] hover:opacity-[0.75]" to="/Orders">View all orders</Link>
                  <div className="delivery-date">Arriving on Monday, June 13</div>
                  <div className="product-info">Black and Gray Athletic Cotton Socks - 6 Pairs</div>
                  <div className="product-info">Quantity: 1</div>

                  <img className="product-image" src="images/products/athletic-cotton-socks-6-pairs.jpg" />

                  <div className="progress-labels-container">
                    <div className="progress-label">
                      Preparing
                    </div>
                    <div className="progress-label current-status">
                      Shipped
                    </div>
                    <div className="progress-label">
                      Delivered
                    </div>
                  </div>

                  <div className="progress-bar-container">
                    <div className="progress-bar"></div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </>
    );
}