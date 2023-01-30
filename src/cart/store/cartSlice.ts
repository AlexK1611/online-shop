import { createSlice } from '@reduxjs/toolkit'
import { CartItem } from 'cart/helpers/cartTypes'

interface CartState {
    cartItems: CartItem[]
}

const cartState: CartState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartState,
    reducers: {
        addItemToCart: (state, action) => {
            state.cartItems = [...state.cartItems, action.payload]
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
        },
        increaseItemQuantity: (state, action) => {
            state.cartItems = state.cartItems.map(item => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })
        },
        decreaseItemQuantity: (state, action) => {
            const targetItem = state.cartItems.find(item => item.id === action.payload)
            if (targetItem?.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
            } else {
                state.cartItems = state.cartItems.map(item => {
                    if (item.id === action.payload) {
                        return { ...item, quantity: item.quantity - 1 }
                    }
                    return item
                })
            }
        },
        emptyCart: state => {
            state.cartItems = []
        }
    }
})

export const {
    addItemToCart,
    removeItemFromCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    emptyCart
} = cartSlice.actions

export default cartSlice.reducer