import { FC, ReactNode } from 'react'
import { Box } from '@mui/material'

interface UserLayoutProps {
    children: ReactNode
}

const UserLayout: FC<UserLayoutProps> = ({ children }) => {
    return (
        <Box sx={{ minHeight: '100vh' }}>
            <Box
                component='header'
                sx={{
                    height: '70px',
                    background: 'lightblue'
                }}
            >
            </Box>
            {children}
        </Box>
    )
}

export default UserLayout