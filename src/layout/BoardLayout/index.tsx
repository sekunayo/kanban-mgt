import { openModal} from "@/slices/modal";
import { RootState } from "@/store";
import { ColumnResponse } from "@/types/schema";
import { checkIfListEmpty } from "@/utils/helpers";
import { css } from "@emotion/css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
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
    columnList: [] | ColumnResponse[];
}

export const BoardLayout = () => {
    const columns = useSelector((state: RootState) => state.column.columns)
    const dispatch = useDispatch()

    const handleToggleColumn = () => {
        dispatch(openModal('ADD_COLUMN'))
      }
    return (
        checkIfListEmpty(columns) ? <EmptyLayout handleToggle={handleToggleColumn} text="This board is empty. Create a new column to get started." btnLabel="+ Add New Column" /> : <BoardLayoutContent columnList={columns} />
    )
}

const BoardLayoutContent = ({ columnList }: BoardLayoutProps) => {
    return (
        <div className={boardLayoutContentStyles}>
            {
                columnList?.map((element: ColumnResponse, index: number) => {
                    return <ColumnLayout key={index + 1} tasks={element.tasks} column={element} />
                })
            }
            <EmptyColumnLayout />
        </div>
    )
}
