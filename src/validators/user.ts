import * as yup from "yup"

export const username = yup.string().required().min(5).max(254)
export const publicKey = yup.string().required().min(2048).max(4096)
export const challenge = yup.string().required().test("is-12-words", "${path} is not a wordset", value => value.split(" ").length === 12)
export const createUser = yup.object().shape({
    username: username,
    publicKey: publicKey
})

export const updateUser = yup.object().shape({
    username, publicKey,
    id: yup.number().required().min(1).max(999999999),
    isAdmin: yup.boolean()
})