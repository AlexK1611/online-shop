import { useDispatch } from 'react-redux'
import { AppDispatch } from 'app/store/store'
import { fetchLogin } from 'auth/store/authThunks'
import { UserCreds } from 'auth/helpers/authTypes'

import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginValidation } from 'auth/helpers/validationSchema'

import { Box, Button } from '@mui/material'
import LoginFormInput from 'auth/ui/LoginFormInput'

const Login = () => {
    const dispatch = useDispatch<AppDispatch>()

    const { control, handleSubmit } = useForm<UserCreds>({
        resolver: yupResolver(loginValidation),
        defaultValues: {
            username: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<UserCreds> = creds => {
        dispatch(fetchLogin(creds))
    }

    return (
        <Box
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <LoginFormInput
                name='username'
                label='Username'
                control={control}
                type='text'
            />
            <LoginFormInput
                name='password'
                label='Password'
                control={control}
                type='password'
            />
            <Button type='submit' sx={{ alignSelf: 'center' }}>
                Submit
            </Button>
        </Box>
    )
}

export default Login
