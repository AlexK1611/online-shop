import { createSlice } from '@reduxjs/toolkit'
import { Product } from 'products/helpers/productsTypes'
import {
    fetchAllProducts,
    fetchSingleProduct
} from 'products/store/productsThunks'

interface ProductsState {
    allProducts: Product[],
    total: number,
    singleProduct: Product | null
}

const productsState: ProductsState = {
    allProducts: [],
    total: 0,
    singleProduct: null
}

const productsSlice = createSlice({
    name: 'products',
    initialState: productsState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload.products
            state.total = action.payload.total
        })
        builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
            state.singleProduct = action.payload
        })
    }
})

export default productsSlice.reducer