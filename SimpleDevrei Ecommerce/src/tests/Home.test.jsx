import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Home } from '../pages/Home'
import { ProductCard } from '../components/Product'
import axios from 'axios'
import userEvent from '@testing-library/user-event'

// MemoryRouter = specifically for testing
import { MemoryRouter } from 'react-router-dom'

// within: lets us find thinhgs within a specific element

vi.mock('axios');

describe('Home Page component  ', () => { 
	let laodCart;

	beforeEach(() =>{
		laodCart = vi.fn();
		axios.get.mockImplementation( async (urlPath) =>{
			if(urlPath === '/api/products'){
				return {
					data: [{
						"id": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
						"image": "images/products/athletic-cotton-socks-6-pairs.jpg",
						"name": "Black and Gray Athletic Cotton Socks - 6 Pairs",
						"rating": {
							"stars": 4.5,
							"count": 87
						},
						"priceCents": 1090,
						"keywords": ["socks", "sports", "apparel"]
					},
					{
						"id": "15b6fc6f-327a-4ec4-896f-486349e85a3d",
						"image": "images/products/intermediate-composite-basketball.jpg",
						"name": "Intermediate Size Basketball",
						"rating": {
							"stars": 4,
							"count": 127
						},
						"priceCents": 2095,
						"keywords": ["sports", "basketballs"]
					}]
				};
			} 
		});
	}); // beforeEach

	it('displays the products correct', async () =>{
		render(
			<MemoryRouter>
				<Home cart={[]} laodCart={laodCart}/>
			</MemoryRouter>
		);

		// findAllByTestId: we'll wait to load the product
		const productContainer = await screen.findAllByTestId('product-container')
		expect(productContainer.length).toBe(2);
		expect(
			within(productContainer[0]).getByText('Black and Gray Athletic Cotton Socks - 6 Pairs')
		).toBeInTheDocument();
		expect(
			within(productContainer[1]).getByText('Intermediate Size Basketball')
		).toBeInTheDocument();
  });

});