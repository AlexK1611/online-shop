import { Outlet, Navigate } from 'react-router-dom'
import GuestLayout from 'app/ui/GuestLayout'

const ProtectedGuestRoutes = () => {
    const token = false
    return !token ? (
        <GuestLayout>
            <Outlet />
        </GuestLayout>
    ) : (
        <Navigate to='/' />
    )
}

export default ProtectedGuestRoutes