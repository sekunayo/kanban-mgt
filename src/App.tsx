import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/css';
import { DragDropContext } from 'react-beautiful-dnd';

import { Header } from '@/components /Header';
import { Sidebar } from '@/components /Sidebar';
import { ModalManager } from '@/components /Modal';


import PlatformLaunch from '@/pages';
import { EmptyLayout } from '@/layout/EmptyLayout';
import { ReactComponent as ShowSidebar } from "@/assets/icons/icon-show-sidebar.svg";
import { RootState } from '@/store';
import { checkIfListEmpty } from '@/utils/helpers';
import { openModal } from '@/slices/modal';


const portals = (
  <>
    <div id="modal"></div>
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
  const boards = useSelector((state: RootState) => state.board.boards)
  const dispatch = useDispatch()
  // const { columns } = useSelector((state: RootState) => state.column)
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const showSidebar = Boolean((toggleSidebar === false) && (checkIfListEmpty(boards) === false))

  const { toggle } = useSelector((state: RootState) => state.modal)

  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar)
  }

  const handleToggleBoard = () => {
    dispatch(openModal('ADD_BOARD'))
  }

  return (
    <DragDropContext onDragEnd={() => console.log("item dropped")}>
      <div className={appStyles(showSidebar)}>
        {showSidebar ? <Sidebar toggleSidebar={toggleSidebar} handleToggleSidebar={handleToggleSidebar} /> : null}
        <div className={appContentStyles}>
          <Header showSidebar={showSidebar} />
          {checkIfListEmpty(boards) ? <EmptyLayout handleToggle={handleToggleBoard} text="This app is empty. Create a new board to get started." btnLabel="+ Create New Board" /> : <PlatformLaunch />}
        </div>

        {Boolean(showSidebar === false) && <button type="button" onClick={handleToggleSidebar} className={appShowSidebarStyles}>
          <ShowSidebar />
        </button>}
      </div>

      {toggle && <ModalManager /> }
      {portals}
    </DragDropContext>
  );
}

export default App;
