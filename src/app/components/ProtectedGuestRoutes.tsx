import { useSelector } from 'react-redux'
import { selectToken } from 'auth/store/authSelectors'
import { Outlet, Navigate } from 'react-router-dom'
import GuestLayout from 'app/ui/GuestLayout'
import { ProductsRoutes } from 'products/helpers/productsTypes'

const ProtectedGuestRoutes = () => {
    const token = useSelector(selectToken)
    return !token ? (
        <GuestLayout>
            <Outlet />
        </GuestLayout>
    ) : (
        <Navigate to={ProductsRoutes.AllProducts} />
    )
}

export default ProtectedGuestRoutes