import { useState, useEffect } from "react"
import axios from "axios"

import { useNavigate, useParams } from "react-router-dom"
import { ProductsRoutes } from "products/helpers/productsTypes"

import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "app/store/store"
import { fetchSingleProduct } from "products/store/productsThunks"
import { selectSingleProduct } from "products/store/productsSelectors"

import {
    Box,
    CardMedia,
    CircularProgress,
    Grid,
    IconButton,
    Stack,
    Typography
} from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const SingleProduct = () => {
    const dispatch = useDispatch<AppDispatch>()

    const params = useParams()
    const navigate = useNavigate()
    const goToProductsPage = () => {
        navigate(ProductsRoutes.AllProducts)
    }

    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const source = axios.CancelToken.source()
        if (params.id) {
            setLoading(true)
            dispatch(fetchSingleProduct(Number(params.id))).then(() => {
                setLoading(false)
            })
        }
        return () => {
            source.cancel()
        }
    }, [dispatch, params.id])

    const productItem = useSelector(selectSingleProduct)

    return (
        <Box
            sx={{
                position: 'relative',
                height: 'calc(100vh - 50px)',
                padding: '80px'
            }}
        >
            <IconButton
                onClick={goToProductsPage}
                sx={{
                    position: 'absolute',
                    top: '30px',
                    left: '30px',
                    transform: 'translate(-50%, -50%)',
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'primary.main'
                    }
                }}
            >
                <ArrowBackIcon color='info' />
            </IconButton>
            {isLoading ? (
                <CircularProgress size={200} color='primary' />
            ) : (
                <>
                    {productItem && (
                        <Grid container spacing={6}>
                            <Grid item xs={6}>
                                <CardMedia component='img' image={productItem.images[0]} />
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
                                    <Stack>
                                        <Typography variant='h2'>{productItem.title}</Typography>
                                        <Typography variant='caption'>{productItem.description}</Typography>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Typography>{`Category: ${productItem.category}`}</Typography>
                                        <Typography>{`Brand: ${productItem.brand}`}</Typography>
                                        <Typography>{`In stock: ${productItem.stock}`}</Typography>
                                        <Typography>{`Discount: ${productItem.discountPercentage}$`}</Typography>
                                        <Typography>{`Price: ${productItem.price}$`}</Typography>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    )}
                </>
            )}
        </Box>
    )
}

export default SingleProduct