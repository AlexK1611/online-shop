import { FC } from 'react'
import { ProductsRoutes } from 'products/helpers/productsTypes'
import AllProducts from 'products/components/AllProducts'
import SingleProduct from 'products/components/SingleProduct'

interface ProductRouterProps {
    path: ProductsRoutes,
    element: FC<{}>
}

export const productsRouter: ProductRouterProps[] = [
    {
        path: ProductsRoutes.AllProducts,
        element: AllProducts
    },
    {
        path: ProductsRoutes.SingleProduct,
        element: SingleProduct
    }
]