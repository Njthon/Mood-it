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
}