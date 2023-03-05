import { useState } from "react"
import { css } from "@emotion/css"

import { BoardLayout } from "@/layout/BoardLayout"

import { AddColumnModal } from "@/screens /AddColumn"
import { ViewTask } from "@/screens /ViewTask"

import { ColumnResponse, ColumnInput, BoardResponse, BoardInput } from "@/types/schema"

const platformLaunchStyles = css({
    width: "100%",
    height: "calc(100vh - 96px)",
    overflow: "auto",
})

interface PlatformLaunchProps {
    columnList: [] | ColumnResponse[];
    handleAddColumn: (values: ColumnInput) => void;
    boardList: [] | BoardResponse[]
}

const PlatformLaunch = ({ columnList , boardList, handleAddColumn}: PlatformLaunchProps) => {

    const [openAddColumn, setOpenAddColumn] = useState(false);
    const [openViewTask, setViewTask] = useState(false);
    const [currentTask, setCurrentTask] = useState<any>(null)

    const handleToggleColumn = () => {
        setOpenAddColumn(!openAddColumn)
    }

    return (
        <div className={platformLaunchStyles}>
            <BoardLayout handleToggleColumn={handleToggleColumn} columnList={columnList} />

            {openAddColumn && <AddColumnModal handleToggleColumn={handleToggleColumn} handleAddColumn={handleAddColumn} />}
            {Boolean(openViewTask && currentTask !== null) ? <ViewTask task={currentTask} /> : null}
        </div>
    )
}

export default PlatformLaunch;