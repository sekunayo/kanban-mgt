import { css } from "@emotion/css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";



import { ReactComponent as BoardIcon } from "@/assets/icons/icon-board.svg";
import { ReactComponent as LogoDark } from "@/assets/icons/logo-dark.svg";
import { ReactComponent as Sun } from "@/assets/icons/icon-light-theme.svg";
import { ReactComponent as Moon } from "@/assets/icons/icon-dark-theme.svg";
import { ReactComponent as HideSidebar } from "@/assets/icons/icon-hide-sidebar.svg";

import { colors } from "@/styles/colors";
import { heading03 } from "@/styles/typography";

import { BoardResponse } from "@/types/schema";


import { Switch } from "../Switch";
import { hexToRgb } from "@/utils/helpers";
import { RootState } from "@/store";

import { setCurrentBoard } from "@/slices/board";
import { openModal } from "@/slices/modal";


interface SidebarProps {
    toggleSidebar: boolean;
    handleToggleSidebar: () => void;
}

interface SidebarMenuItemProps {
    handleMenuItemClick: (element: BoardResponse) => void;
    currentElement: BoardResponse;
    isActive: boolean;
}

const sidebarStyles = css({
    width: "300px",
    height: "100%",
    backgroundColor: colors.white,
    borderRight: `1px solid ${colors.gray02}`,
    position: "relative"

})

const sidebarMenuItemStyles = css({
    width: "calc(100% - 24px)",
    height: "48px",
    display: "flex",
    alignItems: "center",
    borderRadius: "0px 100px 100px 0px",
    backgroundColor: "transparent",
    paddingLeft: '32px',
    cursor: "pointer",

    "&[data-active=true]": {
        backgroundColor: "#635FC7",
        "& p": {
            color: colors.white
        },
        "& svg": {
            "& path": {
                fill: colors.white
            }
        }
    },

    "&:hover": {
        backgroundColor: `rgba(${hexToRgb(colors.primary)}, 0.1)`,
        "& p": {
            color: colors.primary
        },
        "& svg": {
            "& path": {
                fill: colors.primary
            }
        }
    }

})

const sidebarMenuItemContentStyles = css({
    display: 'flex',
    alignItems: 'center',
    height: "auto",


    "& p": {
        marginLeft: "16px",
        color: colors.gray01,
        ...heading03,
        textTransform: "capitalize",
        height: "100%"
    }

})

const sidebarButtonStyles = css({
    height: "48px",
    display: "flex",
    alignItems: "center",
    paddingLeft: '32px',

    "& svg": {
        "& path": {
            fill: colors.primary
        }
    },

    "& p": {
        marginLeft: "16px",
        color: colors.primary,
        ...heading03,
    }
})

const sidebarFooterStyles = css({
    position: "absolute",
    bottom: "0px",
    width: "100%",
})

const sidebarFooterIconStyles = css({
    width: "calc(100% - 49px)",
    height: "48px",
    backgroundColor: colors.gray03,
    borderRadius: "6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto"

})

const sidebarFooterIconBoxStyles = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%"
})

const sidebarToggleStyles = css({
    width: "276px",
    height: "48px",
    borderRadius: "0px 100px 100px 0px",
    marginTop: "8px",
    marginBottom: "32px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "31px",
    color: colors.gray01,
    ...heading03,
    "& p": {
        color: colors.gray01,
    },

    "&:hover": {
        backgroundColor: `rgba(${hexToRgb(colors.primary)}, 0.1)`,
        "& p": {
            color: colors.primary,
        },
        "& svg": {
            "& path": {
                fill: colors.primary
            }
        }
    }
})

export const Sidebar = ({handleToggleSidebar, toggleSidebar}: SidebarProps) => {
    const boards = useSelector((state: RootState) => state.board.boards)
    const dispatch = useDispatch()
    const [activeBoardId, setActiveBoardId] = useState(boards[0]?.id)

    const handleMenuItemClick = (element: BoardResponse) => {
        setCurrentBoard(element)
        setActiveBoardId(element.id)
    }

    return (
        <div className={sidebarStyles}>
            <div style={{ padding: "34px 0px 0px 32px", marginBottom: "54px" }}><LogoDark /></div>
            <div>
                {
                    boards?.map((element: BoardResponse, index: number) => {
                        return <SidebarMenuItem key={index} isActive={Boolean(element?.id === activeBoardId)} currentElement={element} handleMenuItemClick={handleMenuItemClick} />

                    })
                }
            </div>
            <button onClick={() => dispatch(openModal('ADD_BOARD'))} type="button" className={sidebarButtonStyles}>
                <BoardIcon />
                <p>+ Create New Board</p>
            </button>
            <div className={sidebarFooterStyles}>
                <div className={sidebarFooterIconStyles}>
                    <div className={sidebarFooterIconBoxStyles}>
                        <Sun />
                        <Switch />
                        <Moon />
                    </div>

                </div>
                {Boolean(toggleSidebar === false) && <button onClick={handleToggleSidebar} type="button" className={sidebarToggleStyles}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <HideSidebar style={{ marginRight: "15px" }} />
                        <p>Hide Sidebar</p>
                    </div>

                </button>}
            </div>

        </div>
    )
}

const SidebarMenuItem = ({ handleMenuItemClick, currentElement, isActive }: SidebarMenuItemProps) => {

    return (
        <button data-active={isActive} onClick={() => handleMenuItemClick(currentElement)} type="button" className={sidebarMenuItemStyles}>
            <div className={sidebarMenuItemContentStyles}>
                <BoardIcon />
                <p>{currentElement.name}</p>
            </div>
        </button>
    )
}