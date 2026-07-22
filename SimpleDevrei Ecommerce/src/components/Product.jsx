import {FormatCurrency}  from '../utils/money'

export function Products({products}){

	return(
		<div className='grid grid-cols-1 font-roboto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {products.map(({id, image, name, priceCents, rating}) => {
        return (
          <div key={id} className="flex flex-col px-6.25 pt-8 pb-6.25 sm:border-r border-b border-[rgb(240,240,240)]">
						<div className="flex items-center justify-center h-45 mb-5">
							<img className="max-w-full max-h-full rounded-[5px]" src={image} />
						</div>

						<div className="h-10 mb-3">{name}</div>

						<div className="flex items-center mb-2.5">
							<img className="w-25 mr-1.5" src={`/images/ratings/rating-${rating.stars * 10}.png`} alt={`${rating.stars} stars`}/>
							<div className="text-[rgb(25,135,84)] font-medium cursor-pointer mt-1">{rating.count}</div>
						</div>

						<div className="font-semibold mb-3">${FormatCurrency(priceCents)}</div>

						<div className="mb-4">
							<select className='text-[rgb(33,33,33)] bg-[rgb(255,255,255)] rounded-[5px] shadow-[rgba(220,220,220,0.5)] px-1.5 py-1 outline-[#adadad] cursor-pointer focus:outline-[rgb(25,135,84)]  outline-2'>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
							</select>
						</div>

						<div className="grow"></div>

						<div className=" text-[rgb(25,135,84)] text-[16px] flex items-center mb-3 opacity-0">
							<img className="h-5 mr-2" src="../../images/icons/checkmark.png" />
							Added
						</div>

						<button className="w-full text-[15px] p-1 rounded-[5px] bg-[rgb(25,135,84)] text-white border-transparent border shadow shadow-[rgba(220,220,220,0.5)] cursor-pointer hover:bg-[rgba(25,135,84,0.75)]">
							Add to Cart
						</button>
					</div>
        );
      })}
    </div>
	);
}

