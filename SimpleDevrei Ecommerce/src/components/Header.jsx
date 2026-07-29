import '../index.css'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SimpleDevreiLogoLarge from '../assets/SimpleDevreiLogoLarge.png'
import searchIcon from '../assets/search.png'
import cartIcon from '../assets/cart-icon.png'

export function Header({cart}){
	const totalQuantity = cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
	const navigate = useNavigate();
	const [searchParam] = useSearchParams();
	// tinitingnan kung may nakasulat na search sa URL
	// Kung ang URL ay "?search=shoes" -> search = "shoes"
	const searchText = searchParam.get('search');
	const [search, setSearch] = useState(searchText || '');

	useEffect(() =>{
		setSearch(searchText || '');
	},[searchText]);

	function updateSearchInput(event){
		setSearch(event.target.value);
	}

	function searchProducts() {
		navigate(`/?search=${search}`);
	}
	
	return(
	<>
		<header className="bg-[rgb(8,79,45)] w-full fixed top-0 z-5">
			<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center gap-4 h-18">
					{/* Container Logo */}
					<div className=" flex justify-start items-center shrink-0">
						<NavLink to="/" className="hidden lg:flex items-center font-arial text-[21px] font-medium">
							<img className="w-14 cursor-pointer" src={SimpleDevreiLogoLarge} alt="SimpleDevrei" />
							<span className='text-white'>SimpleDevrei</span>
						</NavLink>
						<NavLink to="/" className="hidden md:block lg:hidden">
							<img className="w-12 cursor-pointer" src={SimpleDevreiLogoLarge} alt="SimpleDevrei" />
						</NavLink>
					</div>

					{/* Search Bar */}
					<div className='flex grow max-w-3xl'>
						<input value={search} onChange={updateSearchInput} onKeyDown={(e) => {if(e.key === 'Enter') searchProducts()}}
						className="bg-white grow w-0 rounded-l-lg border-0 text-[16px] h-9.75 font-roboto pl-4 placeholder-gray-500 focus:outline-0" type="text" placeholder="Search" />
						<button onClick={searchProducts}
							className='bg-white w-11.25 shrink-0 rounded-r-lg cursor-pointer flex justify-center items-center'>
							<img className='h-4.5 mr-2' src={searchIcon} alt="Search" />
						</button>
					</div>

					{/* Cart */}
					<div className="shrink-0 flex justify-end gap-2">
						<NavLink className={({ isActive }) => `text-white flex items-center border-b px-3 header-link hover:border-white ${ isActive ? 'border-white' : 'border-transparent'}`}
							to="/Orders">
							<span className="block text-[15px] font-semibold">Orders</span>
						</NavLink>

						<NavLink className="text-white flex items-center px-3 py-2 relative border border-transparent hover:border-white" to="/Checkout">
							<img className="w-9" src={cartIcon} />
							<div className="text-[14px] text-center font-semibold text-[rgb(8,79,45)] absolute top-1.75 right-14.5">{totalQuantity}</div>
							<div className="ml-1.25">Cart</div>
						</NavLink>
					</div>
				</div>
			</div>
		</header>
	</>
	);
}