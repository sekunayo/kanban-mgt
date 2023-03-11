import { ColumnResponse } from "@/types/schema";

export let columnArray: [] | ColumnResponse[] = [];

export const handleColorPicker = (color: string, setColor: React.Dispatch<React.SetStateAction<string>>) => {
    setColor(color)
}