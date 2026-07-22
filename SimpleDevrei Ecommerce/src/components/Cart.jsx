import { FormatCurrency } from "../utils/money";

export function Cart({cart}){
  return(
    <div className="order-summary">
      {cart.map(({id, productId, quantity, product}) =>{
        return(
          <div className='border border-[rgb(222,222,222)] rounded-sm p-5 mb-3' key={productId}>
            {/* Delivery Date */}
            <div className="text-[rgb(25,135,84)] font-bold mt-1.5 mb-6 text-[19px]">
              Delivery date: Tuesday, June 21
            </div>
            {/* Cart Item Grid */}
            <div className='grid grid-cols-[100px_1fr] lg:grid-cols-[100px_1fr_1fr] gap-6'>
              <img className='max-w-full max-h-32 mx-auto' src={product.image} alt={product.name} />
              
              <div className='cart-item-details'>
                <div className="font-bold mb-2 ">
                  {product.name}
                </div>
                <div className="font-bold mb-2">
                  {FormatCurrency(product.priceCents)}
                </div>
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
                {/* Delivery Option */}
                <div className='grid grid-cols-[26px_1fr] mb-3 cursor-pointer'>
                  <input className='mt-0.5 mr-1.5 cursor-pointer' type="radio" name='deliery-option-1' defaultChecked/>
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
                  <input className='mt-0.5 mr-1.5 cursor-pointer' type="radio" name='deliery-option-1'/>
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
                  <input className='mt-0.5 mr-1.5 cursor-pointer' type="radio" name='deliery-option-1'/>
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
        );
      })}
    </div>
  );
}