import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'app/store/store'
import { addItemToCart } from 'cart/store/cartSlice'
import { selectCartItems } from 'cart/store/cartSelector'

import { Product, ProductsRoutes } from 'products/helpers/productsTypes'
import {
    Box,
    Card,
    CardActions,
    CardContent,
    IconButton,
    Stack,
    Typography
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import AddCircleIcon from '@mui/icons-material/AddCircle'

type ProductItemProps = Pick<Product, 'id' | 'title' | 'price' | 'thumbnail'>

const ProductItem: FC<ProductItemProps> = ({ id, title, price, thumbnail }) => {
    const navigate = useNavigate()
    const goToItemPage = () => {
        navigate(`${ProductsRoutes.AllProducts}/${id}`)
    }

    const dispatch = useDispatch<AppDispatch>()
    const handleAddItem = () => {
        dispatch(addItemToCart({
            id,
            title,
            price,
            quantity: 1
        }))
    }

    const cartItems = useSelector(selectCartItems)
    const addedItemCheck = () => {
        return Boolean(cartItems.find(item => item.id === id))
    }

    return (
        <Card>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '200px',
                    backgroundColor: 'info.main'
                }}
            >
                <Box
                    component='img'
                    src={thumbnail}
                    sx={{ height: 'auto', maxHeight: '100%' }}
                />
            </Box>
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '20px',
                    padding: '20px'
                }}
            >
                <Stack sx={{ width: '100%' }}>
                    <Typography noWrap>{title}</Typography>
                    <Typography>{`${price}$`}</Typography>
                </Stack>
                <CardActions>
                    <IconButton
                        onClick={goToItemPage}
                        sx={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '5px',
                            backgroundColor: 'primary.dark',
                            '&:hover': {
                                backgroundColor: 'primary.main'
                            }
                        }}
                    >
                        <InfoIcon />
                    </IconButton>
                    <IconButton
                        sx={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '5px',
                            backgroundColor: 'primary.dark',
                            '&:hover': {
                                backgroundColor: 'primary.main'
                            },
                            '&:disabled': {
                                backgroundColor: 'error.main'
                            }
                        }}
                        onClick={handleAddItem}
                        disabled={addedItemCheck()}
                    >
                        <AddCircleIcon />
                    </IconButton>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default ProductItem