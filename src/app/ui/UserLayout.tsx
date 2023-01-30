import { FC, ReactNode, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'app/store/store'
import { logout } from 'auth/store/authSlice'
import { selectCartQuantity } from 'cart/store/cartSelector'

import { Badge, Box, Button, Stack } from '@mui/material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import CartModal from 'cart/components/CartModal'

interface UserLayoutProps {
    children: ReactNode
}

const UserLayout: FC<UserLayoutProps> = ({ children }) => {
    const dispatch = useDispatch<AppDispatch>()
    const handleLogout = () => {
        dispatch(logout())
    }

    const cartQuantity = useSelector(selectCartQuantity)

    const [isOpen, setOpen] = useState(false)
    const handleModal = () => {
        setOpen(prevState => !prevState)
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                overflow: isOpen ? 'hidden' : 'auto',
                height: isOpen ? '100vh' : 'auto'
            }}
        >
            {isOpen && <CartModal closeModal={handleModal} />}
            <Box
                component='header'
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    height: '50px',
                    backgroundColor: 'primary.dark'
                }}
            >
                <Stack direction='row'>
                    <Button
                        onClick={handleModal}
                        sx={{
                            width: '50px',
                            height: '50px',
                            borderRadius: 0,
                            '&:hover': {
                                backgroundColor: 'primary.main'
                            }
                        }}
                    >
                        <Badge badgeContent={cartQuantity} color='warning'>
                            <ShoppingCartIcon color='info' />
                        </Badge>
                    </Button>
                    <Button
                        onClick={handleLogout}
                        sx={{
                            width: '50px',
                            height: '50px',
                            borderRadius: 0,
                            '&:hover': {
                                backgroundColor: 'primary.main'
                            }
                        }}
                    >
                        <ExitToAppIcon color='info' />
                    </Button>
                </Stack>
            </Box>
            {children}
        </Box>
    )
}

export default UserLayout