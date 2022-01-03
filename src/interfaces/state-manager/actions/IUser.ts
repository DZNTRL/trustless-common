import { Dispatcher } from "./IAction"
import { IUser as IModel } from "../../models/IUser"

export interface IUser {
    checkUsername: (username: string) => (dispatch: Dispatcher) => void
    createUser: (username: string, publicKey: string) => (dispatch: Dispatcher) => void
    requestLogin: (username: string) => (dispatch: Dispatcher) => void
    login: (username: string, challenge: string) => (dispatch: Dispatcher) => void
    logout: () => (dispatch: Dispatcher) => void
    setCreateUsername: (username: string) => (dispatch: Dispatcher) => void
    setCreateUserPublicKey: (publicKey: string) => (dispatch: Dispatcher) => void
    setUsername: (username: string) => (dispatch: Dispatcher) => void
    setCurrentUser: () => (dispatch: Dispatcher) => void
}
