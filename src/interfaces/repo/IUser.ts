import { IResponse } from "../IResponse"
import { IUser as UserModel } from "../models/IUser"

export interface IUser {
    checkUsernameUnique: (username: string) => Promise<IResponse<boolean>>
    createUser: (username: string, publicKey: string ) => Promise<IResponse<number>>
    getPublicKey: (username: string) => Promise<IResponse<string>>
    createChallenge: (username: string, challenge: string) => Promise<IResponse<boolean>>
    getChallenge: (username: string) => Promise<IResponse<string>>
    verifyChallenge: (username: string, challenge: string) => Promise<IResponse<boolean>>
    clearChallenge: (username: string) => Promise<IResponse<boolean>>
    get: (username: string) => Promise<IResponse<UserModel>>
    setLogin: (username: string) => Promise<IResponse<boolean>>
    setLogout: (username: string) => Promise<IResponse<boolean>> 
}