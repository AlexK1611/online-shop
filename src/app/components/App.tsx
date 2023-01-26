import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import ProtectedGuestRoutes from 'app/components/ProtectedGuestRoutes'
import ProtectedUserRoutes from 'app/components/ProtectedUserRoutes'

const App = () => {
    return (
        <BrowserRouter>
            <CssBaseline />
            <Routes>
                <Route element={<ProtectedGuestRoutes />}>
                    <Route path='/auth' element={'Guest'} />
                </Route>
                <Route element={<ProtectedUserRoutes />}>
                    <Route path='/' element={'User'} />
                </Route>
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
