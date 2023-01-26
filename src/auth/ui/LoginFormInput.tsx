import { FC } from 'react'
import { FormHelperText, TextField } from '@mui/material'
import { Controller, Control } from 'react-hook-form'
import { UserCreds } from 'auth/helpers/authTypes'

interface LoginFormInputProps {
    name: keyof UserCreds,
    label: string,
    control: Control<UserCreds, any>
    type: 'text' | 'password'
}

const LoginFormInput: FC<LoginFormInputProps> = ({
    name,
    label,
    control,
    type
}) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, formState }) => (
                <TextField
                    {...field}
                    size='small'
                    label={label}
                    type={type}
                    error={Boolean(formState.errors[name])}
                    helperText={
                        <FormHelperText component='span'>
                            {formState.errors[name]?.message}
                        </FormHelperText>
                    }
                />
            )}
        />
    )
}

export default LoginFormInput