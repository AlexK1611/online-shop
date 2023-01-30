import { FC } from "react"
import { createPortal } from "react-dom"
import { useSelector } from "react-redux"
import { selectCartItems, selectCartTotal } from "cart/store/cartSelector"
import { Box, IconButton, Stack, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'
import PurchaseItem from "cart/ui/PurchaseItem"

interface CartModalProps {
    closeModal: () => void
}

const CartModal: FC<CartModalProps> = ({ closeModal }) => {
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)

    return createPortal(
        <Box
            sx={{
                position: 'fixed',
                zIndex: 1000,
                top: 0,
                left: 0,
                display: 'flex',
                justifyContent: 'flex-end',
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.75)'
            }}
        >
            <IconButton
                onClick={closeModal}
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
                <CloseIcon />
            </IconButton>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '400px',
                    backgroundColor: 'primary.dark',
                    padding: '25px'
                }}
            >
                {cartItems.length > 0 ? (
                    <>
                    <Stack spacing={2} sx={{width:'100%'}}>
                        {cartItems.map(item => (
                            <PurchaseItem
                                key={`cart-item-${item.id}`}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                quantity={item.quantity}
                            />
                        ))}
                    </Stack>
                    <Typography>
                        {`Total: ${cartTotal}$`}
                    </Typography>
                    </>
                ) : (
                    <Typography align="center" variant="h5">
                        Cart is empty
                    </Typography>
                )}
            </Box>
        </Box>,
        document.getElementById('portal') as HTMLElement
    )
}

export default CartModal