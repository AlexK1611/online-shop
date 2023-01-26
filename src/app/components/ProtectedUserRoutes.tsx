import { useSelector } from 'react-redux'
import { selectToken } from 'auth/store/authSelectors'
import { Outlet, Navigate } from 'react-router-dom'
import UserLayout from 'app/ui/UserLayout'
import { AuthRoutes } from 'auth/helpers/authTypes'

const ProtectedUserRoutes = () => {
    const token = useSelector(selectToken)
    return token ? (
        <UserLayout>
            <Outlet />
        </UserLayout>
    ) : (
        <Navigate to={AuthRoutes.Login} />
    )
}

export default ProtectedUserRoutes