"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import cart from '../public/cart.svg'
import love from '../public/love.svg'
import carticn from '../public/icn-shopping-cart.svg'
import menuicn from '../public/icn-menu.svg'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import ShoppingCart from './ShoppingCart';
import { useSelector } from 'react-redux';
import Wishlist from './Wishlist';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

const Header = () => {
	const cartItems = useSelector((state: any) => state.cart.items);
	const wishListItems = useSelector((state: any) => state.wishList.items);
	const quantity = cartItems.length > 0 ? cartItems[0].quantity : 0;
	const wishs = wishListItems.length > 0 ? wishListItems.length : 0;


	const pathname = usePathname()
	const [cartitem, setCartitem] = useState(false)
	const [wish, setWish] = useState(false)
	const navLinks = [
		{ path: '/', label: 'Home' },
		{ path: '/', label: 'Contact' },
		{ path: '/', label: 'About' },
		{ path: '/', label: 'Sign Up' },
	];
	const navLinks2 = [
		{ path: '/', label: 'Home' },
	];

	return (
		<header>
			{/* Top header nav */}
			<div className={pathname === "/detailspage" ? "header_top_container1" : "header_top_container"}>
				<div className='header_top_container_sup_one'>

				</div>
				<div className='header_top_container_sup_shopnow'>
					<h6>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h6> <span>ShopNow</span>
				</div>
				<div className='header_top_container_sup_two'>
					<h6>English</h6>
					<ExpandMoreRoundedIcon />
				</div>
			</div>

			{/* Bottom header nav */}
			<div className={pathname === "/detailspage" ? "header_bottom_container1" : "header_bottom_container"}>
				<div className='header_nav'>
					<h3>Exclusive</h3>
					<nav>
						<ul className='header_ul'>
							{navLinks.map(({ path, label }, index) => (
								<li key={index}  >
									<Link href={path}>{label}</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>

				<div className='header_bottom_container-sub'>
					<div className='header_bottom_container-sub-icons'>
						<span className='header_bottom_container-sub-span'
							onClick={() => { setWish(!wish); setCartitem(false) }} >
							<Image src={love} alt="love" className='icon_headers' />
							<h6>{wishs}</h6>
						</span>
						{wish && <Wishlist setCartitem={setCartitem} setWish={setWish} wish={wish} />}
						<span className='header_bottom_container-sub-span'
							onClick={() => { setCartitem(!cartitem); setWish(false) }}>
							<Image src={cart} alt="cart" className='icon_headers2' />
							<h6>{quantity > 0 ? quantity : 0}</h6>
						</span>
						{cartitem && <ShoppingCart setCartitem={setCartitem} setWish={setWish} cartitem={cartitem} />}
					</div>
				</div>
			</div>

			<div className='header_small_nav_container'>
				<div className='header_small_nav'>
					<h3>Exclusive</h3>
					<div>
						<div className={pathname === "/detailspage" ? "remove" : ""}>
							<Image src={carticn} alt="cart" />
						</div>
						<div >
							<Image src={menuicn} alt="menu" />
						</div>
					</div>
				</div>
				<div className='header_small_nav_links'>
					{navLinks2.map(({ path, label }: any, index: React.Key | null | undefined) => (
						<li key={index} className={pathname === path ? 'addcolor' : pathname === '/detailspage' ? 'remove' : ''}>
							<Link href={path}>{label}</Link>
						</li>
					))}
				</div>

				<div className='header_small_nav_sub'>
					<div className='header_bottom_container-sub-user-profile'>
						<span className='header_bottom_container-sub-span'
							onClick={() => { setWish(!wish); setCartitem(false) }}>
							<Image src={love} alt="love" className='icon_headers1' />
							<h6>{wishs}</h6>
						</span>
						{wish && <Wishlist />}
						<span className='header_bottom_container-sub-span'
							onClick={() => { setCartitem(!cartitem); setWish(false) }}>
							<Image src={cart} alt="cart" className='icon_headers1' />
							<h6>{quantity > 0 ? quantity : 0}</h6>
						</span>
						{cartitem && <ShoppingCart />}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header