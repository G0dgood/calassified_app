import { configureStore } from '@reduxjs/toolkit'  
import productSlice from '../features/Product/productSlice'   
 import cartReducer from '../features/Cart/cartSlice';
 import wishListReducer from '../features/WishList/wishSlice'
  
export const store = configureStore({
  reducer: { 
    product: productSlice,  
        cart: cartReducer,
     wishList: wishListReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


 
 