import { combineReducers } from '@reduxjs/toolkit'
import { persistedAuthReducer } from 'auth/store/authReducer'
import productsReducer from 'products/store/productsSlice'

export const rootReducer = combineReducers({
    auth: persistedAuthReducer,
    products: productsReducer
})