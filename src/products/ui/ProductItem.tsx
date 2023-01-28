import { FC } from 'react'
import { Product, ProductsRoutes } from 'products/helpers/productsTypes'
import { Box, Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material'
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
                    <Button variant='contained' onClick={goToItemPage}>
                        Info
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default ProductItem