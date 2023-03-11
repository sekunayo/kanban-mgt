import { BoardResponse, ColumnResponse } from "./schema";

export interface BoardState {
    boards: [] | BoardResponse[]
    currentBoard: null | BoardResponse
} 

export interface ColumnState {
    columns: [] | ColumnResponse[]
}  

export interface CurrentBoardState{
   currentBoard: null | BoardResponse
}