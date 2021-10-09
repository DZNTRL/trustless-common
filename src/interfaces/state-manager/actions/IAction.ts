export interface IAction {
    type: string
    payload: any
}

export type Dispatcher = (action: IAction) => void