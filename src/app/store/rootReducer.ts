import { combineReducers } from '@reduxjs/toolkit'
import { persistedAuthReducer } from 'auth/store/authReducer'

export const rootReducer = combineReducers({
    auth: persistedAuthReducer
})