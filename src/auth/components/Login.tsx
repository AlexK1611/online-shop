import { useDispatch } from 'react-redux'
import { AppDispatch } from 'app/store/store'
import { fetchLogin } from 'auth/store/authThunks'
import { UserCreds } from 'auth/helpers/authTypes'

import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LOGIN_SCHEMA } from 'auth/helpers/authConstants'

import { Box, Button, Paper, Stack } from '@mui/material'
import LoginFormInput from 'auth/ui/LoginFormInput'

const Login = () => {
    const dispatch = useDispatch<AppDispatch>()

    const { control, handleSubmit } = useForm<UserCreds>({
        resolver: yupResolver(LOGIN_SCHEMA),
        defaultValues: {
            username: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<UserCreds> = creds => {
        dispatch(fetchLogin(creds))
    }

    return (
        <Paper elevation={1} sx={{ padding: '50px', borderRadius: '15px' }}>
            <Box
                component='form'
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}
            >
                <Stack spacing={1}>
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
                </Stack>
                <Button variant='contained' type='submit' sx={{ alignSelf: 'center' }}>
                    Submit
                </Button>
            </Box>
        </Paper>
    )
}

export default Login
