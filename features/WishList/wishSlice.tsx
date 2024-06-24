import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
};

const wishListSlice = createSlice({
	name: 'wishList',
	initialState,
	reducers: {
		addToWishList: (state: any, action: any) => {
			state.items.push(action.payload);
		},
		removeFromWishList: (state: any, action: any) => {
			state.items = state.items.filter((item: { id: any; }) => item.id !== action.payload.id);
		},
	},
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;

export default wishListSlice.reducer;