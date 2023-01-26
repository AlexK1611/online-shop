import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from 'auth/store/authSlice'

const authReducerConfig = {
    key: 'auth',
    storage
}

export const persistedAuthReducer = persistReducer(
    authReducerConfig,
    authReducer
)