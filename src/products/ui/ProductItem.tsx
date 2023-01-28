import { FC } from 'react'
import { Product, ProductsRoutes } from 'products/helpers/productsTypes'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

type ProductItemProps = Pick<Product, 'id' | 'title' | 'price' | 'thumbnail'>

const ProductItem: FC<ProductItemProps> = ({ id, title, price, thumbnail }) => {
    const navigate = useNavigate()
    const goToItemPage = () => {
        navigate(`${ProductsRoutes.AllProducts}/${id}`)
    }
    return (
        <Card>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '200px'
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
                    textAlign: 'center'
                }}
            >
                <Typography>{title}</Typography>
                <Typography>{price}</Typography>
                <CardActions>
                    <Button onClick={goToItemPage}>Info</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default ProductItem