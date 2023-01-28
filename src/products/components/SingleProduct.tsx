import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "app/store/store"
import { fetchSingleProduct } from "products/store/productsThunks"
import { selectSingleProduct } from "products/store/productsSelectors"
import { useParams } from "react-router-dom"
import { Box, CardMedia, Stack, Typography } from "@mui/material"

const SingleProduct = () => {
    const dispatch = useDispatch<AppDispatch>()
    const params = useParams()
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        if (params.id) {
            setLoading(true)
            dispatch(fetchSingleProduct(Number(params.id))).then(() => {
                setLoading(false)
            })
        }
    }, [dispatch, params.id])

    const productItem = useSelector(selectSingleProduct)

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'calc(100vh - 70px)'
            }}
        >
            {!isLoading && productItem && (
                <Box sx={{ display: 'flex', gap: '50px', width: '70%' }}>
                    <CardMedia
                        component='img'
                        image={productItem.images[0]}
                    />
                    <Stack spacing={2}>
                        <Typography>
                            {`Title: ${productItem.title}`}
                        </Typography>
                        <Typography>
                            {`Description: ${productItem.description}`}
                        </Typography>
                        <Typography>
                            {`Category: ${productItem.category}`}
                        </Typography>
                        <Typography>
                            {`Brand: ${productItem.brand}`}
                        </Typography>
                        <Typography>
                            {`In stock: ${productItem.stock}`}
                        </Typography>
                        <Typography>
                            {`Discount: ${productItem.discountPercentage}$`}
                        </Typography>
                        <Typography>
                            {`Price: ${productItem.price}$`}
                        </Typography>
                    </Stack>
                </Box>
            )}
        </Box>
    )
}

export default SingleProduct