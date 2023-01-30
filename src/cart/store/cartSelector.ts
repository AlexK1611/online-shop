import { createSelector } from 'reselect'
import { RootState } from 'app/store/store'

const selectCart = (state: RootState) => state.cart

export const selectCartItems = createSelector(
    selectCart,
    cart => cart.cartItems
)

export const selectCartTotal = createSelector(
    selectCart,
    cart => cart.cartItems
        .map(item => item.price * item.quantity)
        .reduce((previous, current) => previous + current, 0)
)

export const selectCartQuantity = createSelector(
    selectCart,
    cart => cart.cartItems
        .map(item => item.quantity)
        .reduce((previous, current) => previous + current, 0)
)