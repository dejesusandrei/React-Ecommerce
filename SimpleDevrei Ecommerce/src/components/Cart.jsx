import { FormatCurrency } from "../utils/money";
import { useState, useEffect } from 'react'
import { FormatDay } from "../utils/day";
import axios from 'axios';

function CartItem({ item, deliveryOptions }) {
  const { productId, quantity, product, deliveryOptionId } = item;
  
  const [selectedOptionId, setSelectedOptionId] = useState(deliveryOptionId || '1');

  const selectedOption = deliveryOptions.find(opt => opt.id === selectedOptionId) || deliveryOptions[0];

  return (
    <div className='border border-[rgb(222,222,222)] rounded-sm p-5 mb-3'>
      {/* Dynamic Delivery Date Header */}
      <div className="text-[rgb(25,135,84)] font-bold mt-1.5 mb-6 text-[19px]">
        Delivery date: {selectedOption ? FormatDay(selectedOption.estimatedDeliveryTimeMs) : 'Loading...'}
      </div>

      {/* Cart Item Grid */}
      <div className='grid grid-cols-[100px_1fr] lg:grid-cols-[100px_1fr_1fr] gap-6'>
        <img className='max-w-full max-h-32 mx-auto' src={product.image} alt={product.name} />

        <div className='cart-item-details'>
          <div className="font-bold mb-2">{product.name}</div>
          <div className="font-bold mb-2">{FormatCurrency(product.priceCents)}</div>
          <div className="product-quantity">
            <span>
              Quantity: <span className="quantity-label">{quantity}</span>
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

          {deliveryOptions.map(({ id: optionId, priceCents, estimatedDeliveryTimeMs }) => {
            const priceString = priceCents > 0 ? `${FormatCurrency(priceCents)} - Shipping` : 'FREE Shipping';

            return (
              <div className='radio-btns grid grid-cols-[26px_1fr] mb-3 cursor-pointer' key={optionId}>
                <input 
                  className='mt-0.5 mr-1.5 cursor-pointer' 
                  type="radio" 
                  name={`delivery-option-${productId}`} 
                  checked={optionId === selectedOptionId}
                  onChange={() => setSelectedOptionId(optionId)} // Updates state on click
                />
                <div>
                  <div className="font-medium mb-1">
                    {FormatDay(estimatedDeliveryTimeMs)}
                  </div>
                  <div className="text-[rgb(120,120,120)] text-[15px]">
                    {priceString}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// 2. Parent Cart component
export function Cart({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);

  useEffect(() => {
    async function loadDeliveryOptions() {
      try {
        const res = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
        setDeliveryOptions(res.data);
      } catch (error) {
        console.error('Failed to update the delivery options: ', error);
      }
    }
    loadDeliveryOptions();
  }, []);

  return (
    <div className="order-summary">
      {cart.map((item) => (
        <CartItem key={item.productId} item={item} deliveryOptions={deliveryOptions} />
      ))}
    </div>
  );
}