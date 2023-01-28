import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import ProtectedGuestRoutes from 'app/components/ProtectedGuestRoutes'
import ProtectedUserRoutes from 'app/components/ProtectedUserRoutes'
import { authRouter } from 'auth/helpers/authRouter'
import { productsRouter } from 'products/helpers/productsRouter'
import { ProductsRoutes } from 'products/helpers/productsTypes'

const App = () => {
    return (
        <BrowserRouter>
            <CssBaseline />
            <Routes>
                <Route element={<ProtectedGuestRoutes />}>
                    {authRouter.map(({ path, element: Element }) => (
                        <Route
                            key={`${path}-page`}
                            path={path}
                            element={<Element />}
                        />
                    ))}
                </Route>
                <Route element={<ProtectedUserRoutes />}>
                    {productsRouter.map(({ path, element: Element }) => (
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
        </BrowserRouter>
    )
}

export default App
