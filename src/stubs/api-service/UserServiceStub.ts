import { IUser } from "../../interfaces/service/IUser"
import { IUser as IUserRepo } from "../../interfaces/repo/IUser"
import { IUser as IUserModel } from "../../interfaces/models/IUser"
import mysql from "mysql2/promise"
import { IResponse } from "../../interfaces/IResponse"
import { ResponseMessages } from "../../enums/ResponseMessages"
import { Response } from "../../Response"

export const goodUser: string = "TESTUSER"

export const goodChallenge: string = "TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST"

export class User implements IUser {
    repo: IUserRepo
    constructor(pool: mysql.Pool) {
    }
    checkUsernameUnique(username) {
        const resp = new Response<boolean>(true)
        if(username === null) {
            resp.Data = null
            resp.IsError = true
            resp.Message = ResponseMessages.NotFound.toString()
        } else {
            if(username === goodUser) {

            } else {
                resp.Data = false
            }    
        }
        return new Promise<IResponse<boolean>>((res, rej) => {
            res(resp)
        })

    }
    createUser(username, publicKey) {
        const resp = new Response<number>(1)
        if(username === null) {
            resp.Data = null
            resp.IsError = true
            resp.Message = ResponseMessages.NoRecordsUpdated.toString()
        } else {
            if(username === goodUser && publicKey === goodChallenge) {
                
            } else {
                resp.Data = 0
                resp.Message = ResponseMessages.NoRecordsUpdated.toString()
            }    
        }

        return new Promise<IResponse<number>>((res, rej) => {
            res(resp)
        })
    }
    getPublicKey(username) {
        const resp = new Response<string>(goodUser)
        if(username === goodUser) {
            
        } else {
            resp.Data = null
        }

        return new Promise<IResponse<string>>((res, rej) => {
            res(resp)
        })
    }
    requestLogin(username) {
        const resp = new Response<string>(goodChallenge)
        if(username === null) {
            resp.Data = null
            resp.Message = ResponseMessages.NotFound.toString()
            resp.IsError = true
        } else {
            if(username === goodUser) {
            
            } else {
                resp.Data = null
                resp.Message = ResponseMessages.NotFound.toString()
            }    
        }

        return new Promise<IResponse<string>>((res, rej) => {
            res(resp)
        })
    }
    login(username, challenge) {
        const resp = new Response<IUserModel>({id: 0, username: "", publicKey: "", isAdmin: false, lastLogin: null, lastLogout: null})
        if(username === null) {
            resp.Data = null
            resp.IsError = true
            resp.Message = ResponseMessages.NotFound.toString()
        } else {
            if(username === goodUser) {

            } else {
                resp.Data = null
                resp.Message = ResponseMessages.NotFound.toString()
            }    
        }
        return new Promise<IResponse<IUserModel>>((res, rej) => {
            res(resp)
        })
    }
    logout(username) {
        const resp = new Response<boolean>(true)
        if(username === null) {
            resp.Data = null
            resp.IsError = true
            resp.Message = ResponseMessages.NotFound.toString()
        } else {
            if(username === goodUser) {
            } else {
                resp.Data = false
                resp.Message = ResponseMessages.NotFound.toString()
            }    
        }
        return new Promise<IResponse<boolean>>((res, rej) => {
            res(resp)
        })
    }
    get(username) {
        const resp = new Response<IUserModel>({id: 0, username: "", publicKey: "", isAdmin: false, lastLogin: null, lastLogout: null})
        if(username === goodUser) {
        } else {
            resp.Data = null
            resp.Message = ResponseMessages.NotFound.toString()
        }
        return new Promise<IResponse<IUserModel>>((res, rej) => {
            res(resp)
        })
    }
}