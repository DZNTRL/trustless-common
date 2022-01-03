import { IResponse } from "../IResponse";
import { IUser as ICoreUser } from "../service/IUser"
import { IUser as IModel } from "../models/IUser"

export interface IUser {
    getCurrentUser: () => Promise<IResponse<IModel>>
    checkUsernameUnique: (username: string) => Promise<IResponse<boolean>>
    createUser: (username: string, publicKey: string ) => Promise<IResponse<number>>
    login: (username: string, challenge: string) => Promise<IResponse<IModel>>
    requestLogin: (username: string) => Promise<IResponse<string>>
    logout: () => Promise<IResponse<boolean>>
}