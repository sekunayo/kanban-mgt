import { ColumnInput, ColumnResponse } from "@/types/schema";

export let columnArray: [] | ColumnResponse[] = [];


export const handleAddColumn = (addColumnInitialValues: ColumnInput) => {

    return [...columnArray, addColumnInitialValues]
}

export const handleColorPicker = (color: string, setColor: React.Dispatch<React.SetStateAction<string>>) => {
    setColor(color)
}