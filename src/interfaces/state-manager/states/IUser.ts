import { IUser } from "../../models/IUser";
export interface IUserState {
    username: string | null
    usernameUnique: boolean | null
    challenge: string | null
    createUsername: string | null
    createUserPublicKey: string | null
    currentUser: IUser | null
}
