import { configureStore } from '@reduxjs/toolkit'
import shopSlice from './features/shop/shopSlice'
import  cartSlice  from './features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    shop : shopSlice,
    cart : cartSlice,
  }
})