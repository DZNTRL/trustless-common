import { Notifications } from "../../../enums/state-manager/Notifications";
import { Dispatcher } from "./IAction";

export interface IApp {
    setNotification: (type: Notifications, message: string) => (dispatch: Dispatcher) => void
}
