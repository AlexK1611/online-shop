import { createSlice } from '@reduxjs/toolkit'
import { UserProfile } from 'auth/helpers/authTypes'
import { fetchLogin } from 'auth/store/authThunks'

interface AuthState {
    myProfile: UserProfile | null
}

const authState: AuthState = {
    myProfile: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authState,
    reducers: {
        logout: state => {
            state.myProfile = null
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.myProfile = action.payload
        })
    }
})

export const { logout } = authSlice.actions
export default authSlice.reducer