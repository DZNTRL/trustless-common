import { Dispatcher } from "./IAction"

export interface IUser {
    checkUsername: (username: string) => (dispatch: Dispatcher) => void
    createUser: (username: string, publicKey: string) => (dispatch: Dispatcher) => void
    requestLogin: (username: string) => (dispatch: Dispatcher) => void
    login: (username: string, challenge: string) => (dispatch: Dispatcher) => void
    setCreateUsername: (username: string) => (dispatch: Dispatcher) => void
    setCreateUserPublicKey: (publicKey: string) => (dispatch: Dispatcher) => void
}
