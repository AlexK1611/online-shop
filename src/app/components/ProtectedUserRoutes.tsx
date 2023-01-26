import { Outlet, Navigate } from 'react-router-dom'
import UserLayout from 'app/ui/UserLayout'

const ProtectedUserRoutes = () => {
    const token = false
    return token ? (
        <UserLayout>
            <Outlet />
        </UserLayout>
    ) : (
        <Navigate to='/auth' />
    )
}

export default ProtectedUserRoutes