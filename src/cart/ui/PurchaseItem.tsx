import { FC } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "app/store/store"
import { decreaseItemQuantity, increaseItemQuantity, removeItemFromCart } from "cart/store/cartSlice"
import { Box, IconButton, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import CloseIcon from '@mui/icons-material/Close'

interface PurchaseItemProps {
    id: number,
    title: string,
    price: number,
    quantity: number
}

const PurchaseItem: FC<PurchaseItemProps> = ({
    id,
    title,
    price,
    quantity
}) => {
    const dispatch = useDispatch<AppDispatch>()

    const handleIncreaseQuantity = () => {
        dispatch(increaseItemQuantity(id))
    }

    const handleDecreaseQuantity = () => {
        dispatch(decreaseItemQuantity(id))
    }

    const handleRemoveItem = () => {
        dispatch(removeItemFromCart(id))
    }
    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '30px',
                backgroundColor: 'info.main',
                borderRadius: '10px'
            }}
        >
            <IconButton
                onClick={handleRemoveItem}
                sx={{
                    position: 'absolute',
                    top: '5px',
                    right: '5px',
                    width: '20px',
                    height: '20px'
                }}
            >
                <CloseIcon
                    color='error'
                    sx={{ width: '20px', height: '20px' }}
                />
            </IconButton>
            <Box>
                <Typography color='info.dark' variant='h5'>
                    {title}
                </Typography>
                <Typography color='info.dark'>
                    {`${price * quantity}$`}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '5px'
                }}
            >
                <IconButton
                    onClick={handleIncreaseQuantity}
                    sx={{ width: '20px', height: '20px' }}
                >
                    <AddIcon
                        color='primary'
                        sx={{ width: '20px', height: '20px' }}
                    />
                </IconButton>
                <Typography color='info.dark'>
                    {quantity}
                </Typography>
                <IconButton
                    onClick={handleDecreaseQuantity}
                    sx={{ width: '20px', height: '20px' }}
                >
                    <RemoveIcon
                        color='primary'
                        sx={{ width: '20px', height: '20px' }}
                    />
                </IconButton>
            </Box>
        </Box>
    )
}

export default PurchaseItem