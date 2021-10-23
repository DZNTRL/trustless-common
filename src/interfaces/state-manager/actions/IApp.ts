import { LoadingStates } from "../../../enums/state-manager/LoadingStates"
import { Notifications } from "../../../enums/state-manager/Notifications"
import { Dispatcher } from "./IAction"

export interface IApp {
    setNotification: (type: Notifications, message: string) => (dispatch: Dispatcher) => void
    clearNotification: () => (dispatch: Dispatcher) => void
    setLoading: (state: LoadingStates) => (dispatch: Dispatcher) => void
}
