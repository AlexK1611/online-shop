export enum AuthRoutes {
    Login = '/login'
}

export interface UserCreds {
    username: string,
    password: string
}

export interface UserProfile {
    id: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    image: string,
    token: string
}