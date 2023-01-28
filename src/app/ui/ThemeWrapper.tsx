import { FC, ReactNode } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

interface ThemeWrapperProps {
    children: ReactNode
}

const theme = createTheme({
    palette: {
        mode: 'dark',
        info: {
            main: '#FFFFFF'
        }
    }
})

const ThemeWrapper: FC<ThemeWrapperProps> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default ThemeWrapper