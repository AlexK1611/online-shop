import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartReducer from 'cart/store/cartSlice'

const cartReducerConfig = {
    key: 'cart',
    storage
}

export const persistedCartReducer = persistReducer(
    cartReducerConfig,
    cartReducer
)