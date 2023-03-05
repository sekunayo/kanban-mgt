import { colors } from "@/styles/colors";
import { css } from "@emotion/css";
import { heading01, heading04 } from "@/styles/typography"
import { ColumnResponse, SubTaskResponse, TaskResponse } from "@/types/schema";
import { Card } from "@/components /Card";
import { getCompletedSubtask } from "@/utils/helpers";
import { DnDType } from "@/types/component";
import { Droppable } from "react-beautiful-dnd";

const columnLayoutStyles = css({
    height: "100%",
    width: "280px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
})


const emptyColumnLayoutStyles = css({
    height: "100%",
    minWidth: "280px",
    alignItems: "center",
    background: "linear-gradient(180deg, #E9EFFA 0%, rgba(233, 239, 250, 0.5) 100%)",
    borderRadius: "6px",
    display: 'flex',
    justifyContent: "center",

    "& button": {
        ...heading01,
        color: colors.gray01,
    }
})

const columnHeaderStyles = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    "& h4": {
        ...heading04,
        marginLeft: "12px",
        color: colors.gray01,
        textTransform: "uppercase"
    }
})

const columnHeaderCircleStyles = (color: string) => css({
    backgroundColor: color,
    height: "15px",
    width: "15px",
    borderRadius: "50%"


})

interface ColumnLayoutProps {
    tasks: TaskResponse[]
    column: ColumnResponse
    color?: string;
}

interface EmptyColumnLayoutProps {
    handleToggleColumn: () => void;
}



export const ColumnLayout = ({ tasks, column, color }: ColumnLayoutProps) => {

    return (
        <Droppable droppableId="sss">
            {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className={columnLayoutStyles}>
                    <div className={columnHeaderStyles}>
                        {/* <div className={columnHeaderCircleStyles(color)}></div> */}
                        <h4>{`${column.name} (${tasks.length})`}</h4>
                    </div>
                    {
                        tasks?.map((element, index) => {
                            return (
                                <Card key={index + 1} title={element.title} subTaskTotal={element?.subtasks?.length} subTaskCurrentCount={getCompletedSubtask(element?.subtasks)} />
                            )
                        })
                    }
                </div>
            )}

        </Droppable>
    )
}

export const EmptyColumnLayout = ({ handleToggleColumn }: EmptyColumnLayoutProps) => {
    return (
        <div className={emptyColumnLayoutStyles}>
            <button type="button" onClick={handleToggleColumn}>+ New Column</button>
        </div>
    )
}