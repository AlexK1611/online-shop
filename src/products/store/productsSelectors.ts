import { createSelector } from 'reselect'
import { RootState } from 'app/store/store'

const selectProducts = (state: RootState) => state.products

export const selectAllProducts = createSelector(
    selectProducts,
    products => products.allProducts
)

export const selectProductsTotal = createSelector(
    selectProducts,
    products => products.total
)

export const selectSingleProduct = createSelector(
    selectProducts,
    products => products.singleProduct
)