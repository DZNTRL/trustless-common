import yup from "yup"
import { createUser, updateUser, username, publicKey } from "./user"


export interface IValidators {
    createUser: yup.AnySchema,
    updateUser: yup.AnySchema,
    username: yup.AnySchema,
    publicKey: yup.AnySchema
}

export const Validators: IValidators = {
    createUser,
    updateUser,
    username,
    publicKey
} 