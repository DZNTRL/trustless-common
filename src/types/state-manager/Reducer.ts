import { IAction } from "../../interfaces/state-manager/actions/IAction"

export type Reducer<T> = (state:T, action: IAction) => T