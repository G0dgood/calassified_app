import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import Image from 'next/image';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import {
	decrementQuantity as decrementQuantityAction,
	incrementQuantity as incrementQuantityAction,
	removeFromCart as removeFromCartAction,
} from '@/features/Cart/cartSlice';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

const ShoppingCart = ({ setCartitem, setWish, cartitem }: any) => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state: any) => state.cart.items);
	const quantity = cartItems.length > 0 ? cartItems[0].quantity : 0;

	const calculateSubtotal = () => {
		return cartItems.reduce(
			(total: number, item: { price: number; quantity: number }) =>
				total + item.price * item.quantity,
			0
		);
	};

	// Function to remove item from cart
	const handleRemoveFromCart = (itemId: any) => {
		dispatch(removeFromCartAction(itemId));
	};

	// Function to increment quantity of an item in cart
	const handleIncrementQuantity = (itemId: any) => {
		dispatch(incrementQuantityAction(itemId));
	};

	// Function to decrement quantity of an item in cart
	const handleDecrementQuantity = (itemId: any) => {
		dispatch(decrementQuantityAction(itemId));
	};

	return (
		<div className="shopping-cart">
			<div className="title">
				<Badge className="cart-badge" badgeContent={quantity} color="primary">
					<div>Shopping Bag</div>
				</Badge>

				<div className="ClearOutlinedIcon_icon" onClick={() => { setCartitem(!cartitem); setWish(false) }}>
					<ClearOutlinedIcon />
				</div>
			</div>
			{/* Render each item in the cart */}
			{quantity === 0 ? <div className="empty-cart-message">
				<ShoppingCartIcon className="cart-icon" />
				<p className={'cart-icon-p'}>Your cart is empty</p>
			</div> : cartItems?.map((item: any) => (
				<div className="item" key={item.id}>
					<div className="buttons">
						<ClearRoundedIcon className="delete-btn" onClick={() => handleRemoveFromCart(item)} />
					</div>

					<div className="image">
						<Image src={item.images[0]} alt={item.title} width={100} height={100} />
					</div>

					<div className="description">
						<span>{item.title}</span>
					</div>

					<div className="quantity">
						<button className="plus-btn button" type="button" onClick={() => handleDecrementQuantity(item)}>
							<RemoveRoundedIcon />
						</button>
						<input type="text" name="name" className='button_name ' value={item.quantity} readOnly />
						<button className="minus-btn button" type="button" onClick={() => handleIncrementQuantity(item)}>
							<AddRoundedIcon />
						</button>
					</div>

					<div className="total-price">${(item.price * item.quantity).toFixed(2)}</div>
				</div>
			))}

			{/* Checkout section */}
			{quantity === 0 ? "" :
				<div className="checkout-section">
					<button className="checkout-btn" onClick={() => alert("Subtotal: " + calculateSubtotal().toFixed(2))}>
						Checkout
					</button>
					<p className='Subtotal'>Subtotal: ${calculateSubtotal().toFixed(2)}</p>
				</div>}
		</div>
	);
};

export default ShoppingCart;
