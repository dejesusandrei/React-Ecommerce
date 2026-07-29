import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductCard } from '../components/Product'

// render: display the component on the page
// mock: create a fale version of this function or in a backend
// screen: check the fake web page

describe('Product Component', () =>{
	it('displays the product details correctly', () =>{
		const product = {
			"id": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
			"image": "images/products/athletic-cotton-socks-6-pairs.jpg",
			"name": "Black and Gray Athletic Cotton Socks - 6 Pairs",
			"rating": {
				"stars": 4.5,
				"count": 87
			},
			"priceCents": 1090,
			"keywords": ["socks", "sports", "apparel"]
		};

		// vi.fn() = create a fake function that doesnt do anything (mock)
		const loadCart = vi.fn();

		render(<ProductCard product={product} loadCart={loadCart}/>);
		expect(screen.getByText('Black and Gray Athletic Cotton Socks - 6 Pairs')).toBeInTheDocument();
		expect(screen.getByText('$10.90')).toBeInTheDocument();
		expect(screen.getByText('87')).toBeInTheDocument();
		expect(screen.getByTestId('product-image')).toHaveAttribute('src', 'images/products/athletic-cotton-socks-6-pairs.jpg');
		expect(screen.getByTestId('product-image-ratings')).toHaveAttribute('src', '/images/ratings/rating-45.png');
	});
});