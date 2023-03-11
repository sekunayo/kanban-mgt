import { AddBoard } from "@/screens /AddBoard";
import { AddColumn } from "@/screens /AddColumn";
import { AddTask } from "@/screens /AddTask";

import { ModalType } from "@/types/component";

export const modals: Record<ModalType, JSX.Element> = {
    'ADD_TASK': <AddTask />,
    'ADD_COLUMN': <AddColumn />,
    'ADD_BOARD': <AddBoard />
}