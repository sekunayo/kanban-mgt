import { css } from '@emotion/css';
import { Form, Formik } from 'formik';
import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { Button } from './components /Button';
import { Checkbox } from './components /Checkbox';
import { Header } from './components /Header';
import { Input } from './components /Input';
import { Sidebar } from './components /Sidebar';
import PlatformLaunch from './pages/platform-launch';
import data from "@/mock/index.json";
import { ViewTask } from './screens /ViewTask';
import { BoardResponse, ColumnInput, ColumnResponse } from './types/schema';
import { DragDropContext } from 'react-beautiful-dnd';
import { EmptyLayout } from './layout/EmptyLayout';
import { AddBoardModal } from './screens /AddBoard';
import { generateUniqueId } from './utils/helpers';
import { ReactComponent as ShowSidebar } from "@/assets/icons/icon-show-sidebar.svg";
import { AddTaskModal } from './screens /AddTask';

const portals = (
  <>
    <div id="addColumnModal"></div>
    <div id="addBoardModal"></div>
    <div id="addTaskModal"></div>
  </>
)

const appStyles = (showSidebar: boolean) => css({
  position: "relative",
  width: "100%",
  height: "100vh",
  backgroundColor: "#F4F7FD",
  overflow: "hidden",
  display: "grid",
  gridTemplateColumns: showSidebar ? "300px calc(100% - 300px)" : "1fr"

});

const appContentStyles = css({
  width: "100%",
  height: "100%",
})

const appShowSidebarStyles = css({
  position: "absolute",
  bottom: "32px",
  left: "0px",
  zIndex: 20,
  width: "56px",
  height: "48px",
  backgroundColor: "#A8A4FF",
  borderRadius: "0px 100px 100px 0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
})


function App() {
  const [boards, setBoards] = useState<[] | BoardResponse[]>([]);
  const [currentActiveBoard, setCurrentActiveBoard] = useState<BoardResponse | null>(boards[0]);
  const [columnList, setColumnList] = useState<[] | ColumnResponse[]>(currentActiveBoard ? currentActiveBoard?.columns : []);
  const [openAddTask, setOpenAddTask] = useState<boolean>(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [openAddBoard, setOpenAddBoard] = useState(false);



  const isColumnListEmpty = Boolean(columnList?.length === 0)
  const isBoardListEmty = Boolean(boards?.length === 0)
  const showSidebar = Boolean((toggleSidebar === false) && (isBoardListEmty === false))
 
  const handleActiveBoard = (activeBoard: BoardResponse) => {
    setCurrentActiveBoard(activeBoard);
  }

  const handleToggleBoard = () => {
    setOpenAddBoard(!openAddBoard)
  }

  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar)
  }

  const handleToggleTask = () => {
    setOpenAddTask(!openAddTask)
  }

  const handleAddColumn = (values: ColumnInput) => {
    const uniqueColumnId = generateUniqueId("column")
    const newColumnList = columnList ? [...columnList, { name: values.columnName, tasks: [], id: uniqueColumnId }] : [];
    setColumnList(newColumnList);
  }

  const handleAddBoard = (values: any) => {
    const uniqueBoardId = generateUniqueId("board")
    const newBoardList = [...boards, { ...values, id: uniqueBoardId }];
    setCurrentActiveBoard(newBoardList[0] as BoardResponse)
    setBoards(newBoardList);
  }

  return (
    <DragDropContext onDragEnd={() => console.log("item dropped")}>
      <div className={appStyles(showSidebar)}>
        {showSidebar ? <Sidebar toggleSidebar={toggleSidebar} handleToggleSidebar={handleToggleSidebar} handleToggleBoard={handleToggleBoard} handleActiveBoard={handleActiveBoard} boardsList={boards} /> : null}
        <div className={appContentStyles}>
          <Header handleToggleAddTask={handleToggleTask} openAddTask={openAddTask} isColumnListEmpty={isColumnListEmpty} showSidebar={showSidebar} disabled={isColumnListEmpty} headerTitle={currentActiveBoard?.name} />
          {isBoardListEmty ? <EmptyLayout text="This app is empty. Create a new board to get started." btnLabel="+ Create New Board" handleAdd={handleToggleBoard} /> : <PlatformLaunch handleAddColumn={handleAddColumn} boardList={boards} columnList={columnList} />}
        </div>

        {Boolean(showSidebar === false) && <button type="button" onClick={handleToggleSidebar} className={appShowSidebarStyles}>
         <ShowSidebar />
        </button>}
      </div>
      {openAddTask && <AddTaskModal handleAddTask={() => console.log('s')} handleToggleTask={handleToggleTask} />} 

      {openAddBoard && <AddBoardModal handleToggleBoard={handleToggleBoard} handleAddBoard={handleAddBoard} />}
      {portals}
    </DragDropContext>
  );
}

export default App;
