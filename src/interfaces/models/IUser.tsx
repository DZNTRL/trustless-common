export interface IUser {
    username: string
    publicKey: string
    id: number
    isAdmin: boolean
    lastLogin: Date | null
    lastLogout: Date | null
}