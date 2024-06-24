import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './productService'
 
   
 

const initialState = { 

  data:   [],
  isError: false,
  isSuccess: false,
  isLoading: false, 
  message: '',
  error: '', 

  productdata:   [],
  productisError: false,
  productisSuccess: false,
  productisLoading: false, 
  productmessage: '',
  producterror: '', 
 
}
 

 

// Product data
export const productData = createAsyncThunk('product/productData', async (data, thunkAPI) => { 
    try {
    return await authService.productData(data)
  } catch (error:any) {
    const message =
      (error.response && 
        error.response.data && 
        error.response.data.message) ||
      error.message ||
      error.toString() 
     return thunkAPI.rejectWithValue(message)
  }
})

export const productDetails = createAsyncThunk('product/productDetails', async (data, thunkAPI) => { 
    try {
    return await authService.productDetails(data)
  } catch (error:any) {
    const message =
      (error.response && 
        error.response.data && 
        error.response.data.message) ||
      error.message ||
      error.toString() 
     return thunkAPI.rejectWithValue(message)
  }
})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    reset: (state) => {   
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''  

      state.productisLoading = false
      state.productisSuccess = false
      state.productisError = false
      state.productmessage = ''  

    }
  },

  extraReducers: (builder) => {
    builder 
      //  Product
      .addCase(productData.pending, (state) => {
        state.isLoading = true 
      }) 
      .addCase(productData.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.data = action.payload 
      }) 
      .addCase(productData.rejected, (state:any, action) => {
        state.isLoading  = false
        state.isError  = true
        state.message  = action.payload
        state.data  = [] 
      })

      .addCase(productDetails.pending, (state) => {
        state.productisLoading = true 
      }) 
      .addCase(productDetails.fulfilled, (state, action) => {
        state.productisLoading = false
        state.productisSuccess = true
        state.productdata = action.payload 
      }) 
      .addCase(productDetails.rejected, (state:any, action) => {
        state.productisLoading  = false
        state.productisError  = true
        state.productmessage  = action.payload
        state.productdata  = [] 
      })
  
  },
})

export const { reset  } = productSlice.actions
export default productSlice.reducer