import { v4 as uuidv4 } from 'uuid';

export const hexToRgb = (hex: string) => {
    const normal = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    if (normal) return normal.slice(1).map(e => parseInt(e, 16));
  
    const shorthand = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
    if (shorthand) return shorthand.slice(1).map(e => 0x11 * parseInt(e, 16));
  
    return null;
  
}


export const getCompletedSubtask = (subtasks: Array<{ title: string; isCompleted: boolean }>) => {
    return subtasks.filter((element) => element.isCompleted === true).length
}

export const generateUniqueId = (name: string) => {
    return `${name}${uuidv4()}`
}

export const checkIfListEmpty = (list: any) => {
    const listIsEmpty = Boolean(list?.length === 0)
    return listIsEmpty
}