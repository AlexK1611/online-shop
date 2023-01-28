import { FC } from 'react'
import { ProductsRoutes } from 'products/helpers/productsTypes'
import AllProducts from 'products/components/AllProducts'
import SingleProduct from 'products/components/SingleProduct'

interface ProductsRoute {
    path: ProductsRoutes,
    element: FC<{}>
}

export const PRODUCTS_ROUTER: ProductsRoute[] = [
    {
        path: ProductsRoutes.AllProducts,
        element: AllProducts
    },
    {
        path: ProductsRoutes.SingleProduct,
        element: SingleProduct
    }
]

export const PRODUCTS_PER_PAGE = 10