import '../index.css'
import SimpleDevreiLogoLarge from '../assets/SimpleDevreiLogoLarge.png'
import search from '../assets/search.png'
import cart from '../assets/cart-icon.png'

export function Home(){
	return (
		<>
			<header className="bg-[rgb(8,79,45)] w-full fixed top-0 z-5 font-sans">
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center gap-4 h-18">
						{/* Container Logo */}
						<div className=" flex justify-start items-center shrink-0">
							<a href="index.html" className="hidden lg:flex items-center gap-2 font-mono text-[19px] font-medium">
								<img className="w-14 cursor-pointer" src={SimpleDevreiLogoLarge} alt="SimpleDevrei" />
								<span className='text-white'>SimpleDevrei</span>
							</a>
							<a href="index.html" className="hidden md:block lg:hidden">
								<img className="w-12 cursor-pointer" src={SimpleDevreiLogoLarge} alt="SimpleDevrei" />
							</a>
						</div>

						{/* Search Bar */}
						<div className='flex grow max-w-3xl'>
							<input className="bg-white grow w-0 rounded-l-lg border-0 text-[16px] h-9.5 font-sans pl-4 placeholder-gray-500 focus:outline-0" type="text" placeholder="Search" />
							<button className='bg-white w-11.25 shrink-0 rounded-r-lg'>
								<img className='h-4.5' src={search} alt="Search" />
							</button>
						</div>

						{/* Cart */}
						<div className="shrink-0 flex justify-end">
							<a className="text-white flex items-center px-3 header-link" href="orders.html">
								<span className="block text-[15px] font-semibold">Orders</span>
							</a>

							<a className="text-white flex items-center relative header-link" href="checkout.html">
								<img className="w-9" src={cart} />
								<div className="text-[14px] text-center font-semibold text-[rgb(8,79,45)] absolute -top-px right-11.25">3</div>
								<div className="ml-1.25">Cart</div>
							</a>
						</div>
					</div>
				</div>
			</header>

			<main>

			</main>
		</>
  );
}