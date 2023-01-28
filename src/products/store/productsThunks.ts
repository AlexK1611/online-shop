import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from 'app/config/api'
import { AllProductsResponse, Product } from 'products/helpers/productsTypes'
import { PRODUCTS_PER_PAGE } from 'products/helpers/productsConstants'

export const fetchAllProducts = createAsyncThunk<
    AllProductsResponse,
    number
>(
    'products/all',
    async page => {
        try {
            const response = await api.get('products', {
                params: {
                    limit: PRODUCTS_PER_PAGE,
                    skip: (page - 1) * PRODUCTS_PER_PAGE
                }
            })
            return {
                products: response.data.products,
                total: response.data.total
            }
        } catch (error) {
            throw error
        }
    }
)

export const fetchSingleProduct = createAsyncThunk<Product, number>(
    'products/single',
    async id => {
        try {
            const response = await api.get(`products/${id}`)
            return response.data
        } catch (error) {
            throw error
        }
    }
)