import { FC, ReactNode } from 'react'
import { Box } from '@mui/material'

interface GuestLayoutProps {
    children: ReactNode
}

const GuestLayout: FC<GuestLayoutProps> = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}
        >
            {children}
        </Box>
    )
}

export default GuestLayout