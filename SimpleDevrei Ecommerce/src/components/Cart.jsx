import { FormatCurrency } from "../utils/money"
import { useState, useEffect, useCallback, useRef } from 'react'
import { useNavigate } from "react-router-dom"
import { FormatDate } from "../utils/date"
import { NavLink } from 'react-router-dom'

import axios from 'axios'

function OrderSummary({ item, deliveryOptions, loadCart}) {
  const { productId, quantity, product, deliveryOptionId } = item;
  const [selectedOptionId, setSelectedOptionId] = useState(deliveryOptionId || '1');
  const selectedOption = deliveryOptions.find(opt => opt.id === selectedOptionId) || deliveryOptions[0];
  
  async function deleteCart(){
    try {
      await axios.delete(`http://localhost:3000/api/cart-items/${productId}`);
      if (typeof loadCart === 'function') await loadCart();
    } catch (error) {
      console.error('Failed to delete the cart: ', error);
    }
  }

  // FOR UPDATING THE QUANTITY

  const [isUpdated, setIsUpdated] = useState(false);
  const [newQuantity, setNewQuantity] = useState(quantity);
  const inputRef = useRef();

  useEffect(() => {
    if (isUpdated && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select(); // Select existing text for quick editing
    }
  }, [isUpdated]);

  function openUpdateQuantity(){
    setNewQuantity(quantity);
    setIsUpdated(true);
  }

  async function updateQuantity(){
    const parsedQty = Number(newQuantity);

    // Validation: Don't allow invalid numbers or numbers less than 1
    if (isNaN(parsedQty) || parsedQty < 1) {
      alert("Please enter a valid quantity of at least 1.");
      setNewQuantity(quantity);
      return;
    }
    // If no change was made, just close the input mode
    if (parsedQty === quantity) {
      setIsUpdated(false);
      return;
    }

    try {
      await axios.put(`http://localhost:3000/api/cart-items/${productId}`, { quantity: parsedQty});
      if (typeof loadCart === 'function') await loadCart();
      setIsUpdated(false);
    } catch (error) {
      console.error('Failed to update the cart: ', error);
    }
  }
  
  return (
    <div className='border border-[rgb(222,222,222)] rounded-sm p-5 mb-3'>
      {/* Dynamic Delivery Date Header */}
      <div className="text-[rgb(25,135,84)] font-bold mt-1.5 mb-6 text-[19px]">
        Delivery date: {selectedOption ? FormatDate(selectedOption.estimatedDeliveryTimeMs) : 'Loading...'}
      </div>

      {/* Cart Item Grid */}
      <div className='grid grid-cols-[100px_1fr] lg:grid-cols-[100px_1fr_1fr] gap-6'>
        <img className='max-w-full max-h-32 mx-auto' src={product.image} alt={product.name} />

        <div className='cart-item-details'>
          <div className="font-bold mb-2">{product.name}</div>
          <div className="font-bold mb-2">{FormatCurrency(product.priceCents)}</div>
          <div className="product-quantity flex">
            <span>
              Quantity: {isUpdated ? (<input type="text" 
              ref={inputRef}
              value={newQuantity}
              onKeyDown={(event) => {
                if(event.key === 'Enter') updateQuantity(); 
                if(event.key === 'Escape'){
                  setNewQuantity(quantity);
                  setIsUpdated(false);
                }
              }} 
              onChange={(event) => setNewQuantity(event.target.value)} className="border rounded-[5px] w-12.5 px-2 outline-0"/>) : (<span className="quantity-label">{quantity}</span>)}
            </span>
            {isUpdated ? (<span onClick={updateQuantity} className="update-quantity-link ml-1.5 text-[rgb(25,135,84)] hover:opacity-[0.75] cursor-pointer">
              Save
            </span>) :(
              <span onClick={openUpdateQuantity} className="update-quantity-link ml-1.5 text-[rgb(25,135,84)] hover:opacity-[0.75] cursor-pointer">
              Update
            </span>
            )}
        
            <span onClick={deleteCart} className="delete-quantity-link ml-1.5 text-[rgb(25,135,84)] hover:opacity-[0.75] cursor-pointer">
              Delete
            </span>
          </div>
        </div>

        <DeliveryOptions deliveryOptions={deliveryOptions} productId={productId} selectedOptionId={selectedOptionId} setSelectedOptionId={setSelectedOptionId} loadCart={loadCart}/>
      </div>
    </div>
  );
}

function DeliveryOptions({deliveryOptions, productId, selectedOptionId, setSelectedOptionId, loadCart}){
  async function updateDeliveryOption(optionId){
    try {
      setSelectedOptionId(optionId);

      await axios.put(`http://localhost:3000/api/cart-items/${productId}`, {deliveryOptionId: optionId}); 
      if (typeof loadCart === 'function') await loadCart();
    } catch (error) {
      console.error('Failed to update the delivery: ', error);
    }
  }

  return(
    <div  className='delivery-options max-[1024px]:col-[1/span_2]'>
      <div className='font-bold mb-3'>Choose a delivery option:</div>

      {deliveryOptions.map(({ id: optionId, priceCents, estimatedDeliveryTimeMs }) => {
        const priceString = priceCents > 0 ? `${FormatCurrency(priceCents)} - Shipping` : 'FREE Shipping';

        return (
          <div onClick={() => updateDeliveryOption(optionId)} className='hover-option radio-btns grid grid-cols-[26px_1fr] mb-3 cursor-pointer' key={optionId}>
            <input 
              className='radio mt-0.5 mr-1.5 cursor-pointer' 
              type="radio" 
              name={`delivery-option-${productId}`} 
              checked={optionId === selectedOptionId}
              onChange={() => {}} // Updates state on click
            />
            <div>
              <div className="date font-medium mb-1">
                {FormatDate(estimatedDeliveryTimeMs)}
              </div>
              <div className="shipping text-[rgb(120,120,120)] text-[15px]">
                {priceString}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function PaymentSummary({paymentSummary, loadCart, cart}){
  const navigate = useNavigate();

  async function createOrder() {
    try {
      await axios.post(`http://localhost:3000/api/orders`);
      if(typeof loadCart === 'function') await loadCart();
      navigate('/Orders');
    } catch (error) {
      console.error('Failed to place an order: ', error);
    }
  }

  return(
    <div className='border border-[rgb(222,222,222)] max-[1024px]:row-start-1 max-[1024px]:mb-3 rounded-sm p-5'>
      <div className="font-bold text-[18px] mb-3">Payment Summary</div>
      
      {paymentSummary && (
        <>
          <div className="grid grid-cols-[1fr_auto] text-[15px] mb-3" data-testid="payment-summary-product-cost">
            <div>Items ({paymentSummary.totalItems}):</div>
            <div className="text-right">{FormatCurrency(paymentSummary.productCostCents)}</div>
          </div>

          <div className="grid grid-cols-[1fr_auto] text-[15px] mb-3" data-testid="payment-summary-shipping-cost">
            <div>Shipping &amp; handling:</div>
            <div className="text-right">{FormatCurrency(paymentSummary.shippingCostCents)}</div>
          </div>

          <div className="grid grid-cols-[1fr_auto] text-[15px] mb-3" data-testid="payment-summary-total-before-tax">
            <div>Total before tax:</div>
            <div className="text-right border-t border-t-[rgb(222,222,222)]">{FormatCurrency(paymentSummary.totalCostBeforeTaxCents)}</div>
          </div>

          <div className="grid grid-cols-[1fr_auto] text-[15px] mb-3" data-testid="payment-summary-tax">
            <div>Estimated tax (10%):</div>
            <div className="text-right">{FormatCurrency(paymentSummary.taxCents)}</div>
          </div>

          <div className="grid grid-cols-[1fr_auto] text-[rgb(25,135,84)] font-bold text-[18px] pt-4.5 mb-3 border-t border-t-[rgb(222,222,222)]" data-testid="payment-summary-total">
            <div>Order total:</div>
            <div className="text-right">{FormatCurrency(paymentSummary.totalCostCents)}</div>
          </div>

          <button 
          onClick={createOrder} 
          disabled={!cart && cart.length === 0 }
          className={`${!cart || cart.length === 0 ? `opacity-[0.5] cursor-not-allowed w-full text-[15px] p-1.75 mt-2 rounded-[5px] bg-[rgb(25,135,84)] text-white border-transparent border shadow shadow-[rgba(220,220,220,0.5)]` : 'w-full text-[15px] p-1.75 mt-2 rounded-[5px] bg-[rgb(25,135,84)] text-white border-transparent border shadow shadow-[rgba(220,220,220,0.5)] cursor-pointer hover:bg-[rgba(25,135,84,0.75)]'}`}>
            Place your order
          </button>
        </>
      )}
      
    </div>
  );
}

export function Cart({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  const loadData = useCallback(async () => {
    try {
      const [resDeliveryOption, resPaymentSummary] = await Promise.all([
        axios.get('http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime'),
        axios.get('http://localhost:3000/api/payment-summary')
      ]); 
      setDeliveryOptions(resDeliveryOption.data);
      setPaymentSummary(resPaymentSummary.data);
    } catch (error) {
      console.error('Failed to update the delivery options or summary: ', error);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [cart, loadData]);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-[1fr_350px] items-start gap-3'>
      <div className="order-summary">
        {cart && cart.length > 0 ? (
          cart.map((item) => (
            <OrderSummary key={item.productId} item={item} deliveryOptions={deliveryOptions} loadCart={loadCart}/>
          ))
        ):(
          <div className="block text-[18px] ">
            <p className="mb-3">Your cart is currently empty.</p>
            <NavLink to={"/"} className="q-full text-[15px] font-semibold py-2 px-3.5 mt-7 rounded-[5px] bg-[rgb(25,135,84)] text-white border-transparent border shadow shadow-[rgba(220,220,220,0.5)] cursor-pointer hover:bg-[rgba(25,135,84,0.75)]">
              View products
            </NavLink>
          </div>
        )}
      </div>
        <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} cart={cart}/>
    </div>
  );
}