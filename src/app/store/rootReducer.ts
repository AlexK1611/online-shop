import { combineReducers } from '@reduxjs/toolkit'
import { persistedAuthReducer } from 'auth/store/authReducer'
import productsReducer from 'products/store/productsSlice'
import { persistedCartReducer } from 'cart/store/cartReducer'

export const rootReducer = combineReducers({
    auth: persistedAuthReducer,
    products: productsReducer,
    cart: persistedCartReducer
})