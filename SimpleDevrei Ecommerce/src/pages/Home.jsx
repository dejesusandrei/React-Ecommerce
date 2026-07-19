import '../index.css'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header';


export function Home(){
	return (
		<>
			<title>Home</title>
			
			<Header />

			<main className='mt-18'>
				<section className='w-full'>
					<div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
						{/* Product Grid */}
						<div className='grid grid-cols-1 font-roboto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
							{/* Product Container */}
							<div className="flex flex-col px-6.25 pt-8 pb-6.25 sm:border-r border-b border-[rgb(240,240,240)]">
								<div className="flex items-center justify-center h-45 mb-5">
									<img className="max-w-full max-h-full rounded-[5px]" src="../../images/products/athletic-cotton-socks-6-pairs.jpg" />
								</div>

								<div className="h-10 mb-3">Black and Gray Athletic Cotton Socks - 6 Pairs</div>

								<div className="flex items-center mb-2.5">
									<img className="w-25 mr-1.5" src="../../images/ratings/rating-45.png" />
									<div className="text-[rgb(25,135,84)] font-medium cursor-pointer mt-1">87</div>
								</div>

								<div className="font-semibold mb-3">$10.90</div>

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

							<div className="flex flex-col px-6.25 pt-8 pb-6.25 sm:border-r border-b border-[rgb(240,240,240)]">
								<div className="flex items-center justify-center h-45 mb-5">
									<img className="max-w-full max-h-full rounded-[5px]" src="../../images/products/intermediate-composite-basketball.jpg" />
								</div>

								<div className="h-10 mb-3">Intermediate Size Basketball</div>

								<div className="flex items-center mb-2.5">
									<img className="w-25 mr-1.5" src="../../images/ratings/rating-40.png" />
									<div className="text-[rgb(25,135,84)] font-medium cursor-pointer mt-1">87</div>
								</div>

								<div className="font-semibold mb-3">$20.95</div>

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

						</div>

					</div>
				</section>
			</main>
		</>
  );
}