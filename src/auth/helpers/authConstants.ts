import { FC } from 'react'
import { AuthRoutes } from 'auth/helpers/authTypes'
import Login from 'auth/components/Login'
import * as yup from 'yup'

interface AuthRoute {
    path: AuthRoutes,
    element: FC<{}>
}

export const AUTH_ROUTER: AuthRoute[] = [
    {
        path: AuthRoutes.Login,
        element: Login
    }
]

export const LOGIN_SCHEMA = yup.object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required').min(4, 'At least 4 characters')
})