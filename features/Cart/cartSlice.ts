// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state:any, action:any) => {
      const existingItemIndex:any = state.items.findIndex((item:any) => item.id === action.payload.id);

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state:any, action:any) => {
      const indexToRemove:any = state.items.findIndex((item:any) => item.id === action.payload.id);

      if (indexToRemove !== -1) {
        state.items.splice(indexToRemove, 1);
      }
    },
    incrementQuantity: (state:any, action) => {
      const indexToIncrement:any = state.items.findIndex((item:any) => item.id === action.payload.id);

      if (indexToIncrement !== -1) {
        state.items[indexToIncrement].quantity += 1;
      }
    },
    decrementQuantity: (state:any, action:any) => {
      const indexToDecrement:any = state.items.findIndex((item:any) => item.id === action.payload.id);

      if (indexToDecrement !== -1 && state.items[indexToDecrement].quantity > 1) {
        state.items[indexToDecrement].quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
