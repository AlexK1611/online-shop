import { FC, ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'app/store/store'
import { logout } from 'auth/store/authSlice'
import { Box, Button } from '@mui/material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

interface UserLayoutProps {
    children: ReactNode
}

const UserLayout: FC<UserLayoutProps> = ({ children }) => {
    const dispatch = useDispatch<AppDispatch>()

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <Box sx={{ minHeight: '100vh' }}>
            <Box
                component='header'
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    height: '50px',
                    backgroundColor: 'primary.dark'
                }}
            >
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
            </Box>
            {children}
        </Box>
    )
}

export default UserLayout