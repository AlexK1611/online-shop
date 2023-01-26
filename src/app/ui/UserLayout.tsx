import { FC, ReactNode } from 'react'
import { Box } from '@mui/material'

interface UserLayoutProps {
    children: ReactNode
}

const UserLayout: FC<UserLayoutProps> = ({ children }) => {
    return (
        <Box sx={{ height: '100vh' }}>
            {children}
        </Box>
    )
}

export default UserLayout