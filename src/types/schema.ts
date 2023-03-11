export type TaskStatus = "Done" | "Todo" | "Doing"


export interface ColumnPayload {
    name: string;
    color?: string;
}

export interface BoardPayload {
    name: string,
    columns: [] | ColumnResponse[]
}

export interface TaskInput {
    name: string,
}

export interface BoardResponse {
    name: string;
    id: string;
    columns: ColumnResponse[]
}
export interface ColumnResponse {
    name: string;
    color?: string;
    tasks: TaskResponse[] | [];
    id: string;
}

export interface SubTaskResponse {
    title: string,
    isCompleted: boolean
}

export interface TaskResponse {
    title: string,
    subtasks : SubTaskResponse[],
    description: string,
    status: string
}