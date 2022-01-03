import { IResponse } from "../IResponse"
import { IUser as UserModel } from "../models/IUser"

export interface IUser {
    checkUsernameUnique: (username: string) => Promise<IResponse<boolean>>
    createUser: (username: string, publicKey: string ) => Promise<IResponse<number>>
    getPublicKey: (username: string) => Promise<IResponse<string>>
    login: (username: string, challenge: string) => Promise<IResponse<UserModel>>
    requestLogin: (username: string) => Promise<IResponse<string>>
    get: (username: string) => Promise<IResponse<UserModel>>
    logout: (username: string) => Promise<IResponse<boolean>>
}