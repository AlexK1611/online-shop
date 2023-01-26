import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from 'app/config/api'
import { UserCreds, UserProfile } from 'auth/helpers/authTypes'

export const fetchLogin = createAsyncThunk<UserProfile, UserCreds>(
    'auth/login',
    async creds => {
        try {
            const response = await api.post('auth/login', creds)
            return response.data
        } catch (error) {
            throw error
        }
    }
)