import { LoadingStates } from "../../../enums/state-manager/LoadingStates"
import { NotificationArgs } from "../../../types/state-manager/NotificationArgs"
export interface IAppState {
    notification: NotificationArgs | null
    loading: LoadingStates | null
}
