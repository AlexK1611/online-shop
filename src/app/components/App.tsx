import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import ThemeWrapper from 'app/ui/ThemeWrapper'
import ProtectedGuestRoutes from 'app/components/ProtectedGuestRoutes'
import ProtectedUserRoutes from 'app/components/ProtectedUserRoutes'
import { AUTH_ROUTER } from 'auth/helpers/authConstants'
import { PRODUCTS_ROUTER } from 'products/helpers/productsConstants'
import { ProductsRoutes } from 'products/helpers/productsTypes'

const App = () => {
    return (
        <BrowserRouter>
            <ThemeWrapper>
                <CssBaseline />
                <Routes>
                    <Route element={<ProtectedGuestRoutes />}>
                        {AUTH_ROUTER.map(({ path, element: Element }) => (
                            <Route
                                key={`${path}-page`}
                                path={path}
                                element={<Element />}
                            />
                        ))}
                    </Route>
                    <Route element={<ProtectedUserRoutes />}>
                        {PRODUCTS_ROUTER.map(({ path, element: Element }) => (
                            <Route
                                key={`${path}-page`}
                                path={path}
                                element={<Element />}
                            />
                        ))}
                        <Route path='/' element={<Navigate to={ProductsRoutes.AllProducts} />} />
                    </Route>
                    <Route path='*' element={<Navigate to={ProductsRoutes.AllProducts} />} />
                </Routes>
            </ThemeWrapper>
        </BrowserRouter>
    )
}

export default App
