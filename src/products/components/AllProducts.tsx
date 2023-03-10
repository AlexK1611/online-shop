import { useState, useEffect, ChangeEvent } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'app/store/store'
import { fetchAllProducts } from 'products/store/productsThunks'
import {
    selectAllProducts,
    selectProductsTotal
} from 'products/store/productsSelectors'
import { PRODUCTS_PER_PAGE } from 'products/helpers/productsConstants'

import { Box, CircularProgress, Grid, Pagination } from '@mui/material'
import ProductItem from 'products/ui/ProductItem'

const AllProducts = () => {
    const [page, setPage] = useState(1)
    const handlePage = (event: ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }

    const [isLoading, setLoading] = useState(false)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        setLoading(true)
        dispatch(fetchAllProducts(page)).then(() => {
            setLoading(false)
        })
    }, [dispatch, page])

    const allProducts = useSelector(selectAllProducts)
    const productsTotal = useSelector(selectProductsTotal)

    return (
        <Box
            component='main'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '50px',
                minHeight: 'calc(100vh - 50px)',
                padding: '50px',
            }}
        >
            {isLoading ? (
                <CircularProgress size={200} color='primary' />
            ) : (
                <>
                    {allProducts.length > 0 && (
                        <Grid container spacing={3}>
                            {allProducts.map(product => (
                                <Grid item xs={3} key={`product-${product.id}`}>
                                    <ProductItem
                                        id={product.id}
                                        title={product.title}
                                        price={product.price}
                                        thumbnail={product.thumbnail}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                    {productsTotal && (
                        <Pagination
                            count={productsTotal / PRODUCTS_PER_PAGE}
                            page={page}
                            onChange={handlePage}
                            showFirstButton
                            showLastButton
                        />
                    )}
                </>
            )}

        </Box>
    )
}

export default AllProducts