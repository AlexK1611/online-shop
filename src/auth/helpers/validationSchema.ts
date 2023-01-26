import * as yup from 'yup'

export const loginValidation = yup.object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required').min(4, 'At least 4 characters')
})