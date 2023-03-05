export type TaskStatus = "Done" | "Todo" | "Doing"


export interface ColumnInput {
    columnName: string;
    color: string
}

export interface BoardInput {
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
    tasks: TaskResponse[];
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