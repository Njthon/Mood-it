export interface IScoring {
    pleasure: number
    stress: number
    time: number
}


export interface ITask {
    id: string
    title: string
    text: string
    scoring: IScoring
    icon: string
    color: string
    day: string
    keywords: [string]
    plannedDate: string
    procrastinationCount: number
    isEditing: boolean
    userId: string
    isDone: boolean
}

export interface INewtask {
    id?: string
    title: string
    text: string
    scoring: IScoring
    plannedDate: string
    isDone: boolean
}