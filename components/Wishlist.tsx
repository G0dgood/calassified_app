import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import Image from 'next/image';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { removeFromWishList } from '../features/WishList/wishSlice';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

const Wishlist = ({ setCartitem, setWish, wish }: any) => {
	const dispatch = useDispatch();
	const wishListItems = useSelector((state: any) => state.wishList.items);
	// Function to remove item from wish list
	const handleRemoveFromWishList = (item: any) => {
		dispatch(removeFromWishList(item));
	};

	return (
		<div className="shopping-cart">
			<div className="title">
				<Badge className="cart-badge" badgeContent={wishListItems.length} color="primary">
					<div>Wish List</div>
				</Badge>

				<div className="ClearOutlinedIcon_icon" onClick={() => { setWish(!wish); setCartitem(false) }}>
					<ClearOutlinedIcon />
				</div>
			</div>
			{/* Render each item in the wish list */}
			{wishListItems.length === 0 ? (
				<div className="empty-cart-message">
					<ShoppingCartIcon className="cart-icon" />
					<p className='cart-icon-p'>Your wish list is empty</p>
				</div>
			) : (
				wishListItems.map((item: any) => (
					<div className="item" key={item.id}>
						<div className="buttons">
							<ClearRoundedIcon className="delete-btn" onClick={() => handleRemoveFromWishList(item)} />
						</div>
						<div className="image">
							<Image src={item.images[0]} alt={item.title} width={100} height={100} />
						</div>
						<div className="description">
							<span>{item.title}</span>
						</div>
					</div>
				))
			)}
		</div>
	);
};

export default Wishlist;

