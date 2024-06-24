import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';


const Monthseller = ({ data }: any) => {
	const [products, setProducts] = useState<any>([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [category, setCategory] = useState('');
	const [brand, setBrand] = useState('');
	const [minPrice, setMinPrice] = useState('');
	const [maxPrice, setMaxPrice] = useState('');
	const [sortCriteria, setSortCriteria] = useState('');

	useEffect(() => {
		setProducts(data.products);
		setFilteredProducts(data.products);
	}, [data.products]);

	// Filter products
	const filterProducts = () => {
		let filtered = products;

		if (category) {
			filtered = filtered.filter((product: any) => product.category === category);
		}

		if (brand) {
			filtered = filtered.filter((product: any) => product.brand === brand);
		}

		if (minPrice) {
			filtered = filtered.filter((product: any) => product.price >= parseFloat(minPrice));
		}

		if (maxPrice) {
			filtered = filtered.filter((product: any) => product.price <= parseFloat(maxPrice));
		}

		setFilteredProducts(filtered);
	};

	// Sort products
	const sortProducts = (criteria: string) => {
		let sorted = [...filteredProducts];

		if (criteria === 'price-asc') {
			sorted.sort((a: any, b: any) => a.price - b.price);
		} else if (criteria === 'price-desc') {
			sorted.sort((a: any, b: any) => b.price - a.price);
		} else if (criteria === 'rating') {
			sorted.sort((a: any, b: any) => b.rating - a.rating);
		} else if (criteria === 'name') {
			sorted.sort((a: any, b: any) => a.title.localeCompare(b.title));
		}

		setFilteredProducts(sorted);
	};

	// Apply filters and sorting
	useEffect(() => {
		filterProducts();
	}, [category, brand, minPrice, maxPrice]);

	useEffect(() => {
		sortProducts(sortCriteria);
	}, [sortCriteria]);

	const BestsellerComponent = ({ data }: any) => (
		<div className='flash_products_container_month'>
			{data.map((item: any, index: any) => (
				<Link key={index} className='bestseller_item' href={`/detailspage/${item?.id}`}>
					<div className='bestseller_products_img'>
						<Image src={item.thumbnail} alt={`Product ${index + 1}`} width={280} height={238} />
					</div>
					<div className='bestseller_text_container'>
						<h5 className='bestseller_card_title_1'>{item.brand}</h5>
						<div className='bestseller_card_title_3'>
							<span className='bestseller_card_title_2_sub1'>${item.price}</span>
							<span className='bestseller_card_title_2_sub2'>{item.discountPercentage}% off</span>
						</div>
						<span className='bestseller_card_title_2'>{item.category}</span>
					</div>
				</Link>
			))}
		</div>
	);

	return (
		<div>
			<h1>Product List</h1>
			<div className='filter_input_container'>
				<label>
					Category:
					<input className='filter_input' type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
				</label>
				<label>
					Brand:
					<input className='filter_input' type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
				</label>
				<label>
					Min Price:
					<input className='filter_input' type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
				</label>
				<label>
					Max Price:
					<input className='filter_input' type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
				</label>
				<label>
					Sort by:
					<select className='filter_input' value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}>
						<option value="">None</option>
						<option value="price-asc">Price: Low to High</option>
						<option value="price-desc">Price: High to Low</option>
						<option value="rating">Rating</option>
						<option value="name">Name</option>
					</select>
				</label>
			</div>
			<section>
				<BestsellerComponent data={filteredProducts} />
			</section>
		</div>
	);
};

export default Monthseller;