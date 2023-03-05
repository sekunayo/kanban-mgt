import { Button } from "@/components /Button";
import { colors } from "@/styles/colors";
import { heading02 } from "@/styles/typography";
import { ColumnInput, ColumnResponse } from "@/types/schema";
import { css } from "@emotion/css";
import { useState } from "react";
import { ColumnLayout, EmptyColumnLayout } from "../ColumnLayout";
import { EmptyLayout } from "../EmptyLayout";


const boardLayoutContentStyles = css({
    display: "flex",
    flexDirection: "row",
    gap: "24px",
    width: "100%",
    height: "100%",
    padding: "24px",
})


interface BoardLayoutProps {
    handleToggleColumn: () => void;
    columnList: [] | ColumnResponse[];
}

export const BoardLayout = ({ handleToggleColumn, columnList }: BoardLayoutProps) => {
    const isColumnListEmpty = Boolean(columnList.length === 0)

    return (
        isColumnListEmpty ? <EmptyLayout text="This board is empty. Create a new column to get started." btnLabel="+ Add New Column" handleAdd={handleToggleColumn} /> : <BoardLayoutContent handleToggleColumn={handleToggleColumn} columnList={columnList} />
    )
}

const BoardLayoutContent = ({ columnList, handleToggleColumn }: BoardLayoutProps) => {
    return (
        <div className={boardLayoutContentStyles}>
            {
                columnList?.map((element: ColumnResponse, index: number) => {
                    return <ColumnLayout key={index + 1} tasks={element.tasks} column={element} />
                })
            }
            <EmptyColumnLayout handleToggleColumn={handleToggleColumn} />
        </div>
    )
}
