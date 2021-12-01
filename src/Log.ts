import { LogLevel } from "./enums/LogLevel"
export type LogType = (level: LogLevel, ...args: string[]) => void