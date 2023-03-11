import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useClickAway } from "react-use";
import { css } from "@emotion/css";

import { colors } from "@/styles/colors";
import { body01, heading01 } from "@/styles/typography";


import { ReactComponent as OverflowMenu } from "@/assets/icons/icon-vertical-ellipsis.svg";
import { ReactComponent as LogoDark } from "@/assets/icons/logo-dark.svg";

import { Button } from "../Button";
import { RootState } from "@/store";
import { openModal } from "@/slices/modal";
import { checkIfListEmpty } from "@/utils/helpers";


const headerStyles = css({
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "96px",
    display: "flex",
    alignItems: "center",
    position: "sticky",
    top: "0",
    left: "0 ",
    borderBottom: `1px solid ${colors.gray02}`
})

const headerLogoStyles = css({
    height: "100%",
    display: "flex",
    alignItems: "center",
    width: "auto", 
    padding: "0px 20px 0px 24px",
    borderRight: " 1px solid #E4EBFA"
})

const headerNavigationStyles = css({
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    alignItems: "center",
    padding: "0px 42px 0px 32px",
})

const headerTitleStyles = css({
    ...heading01,
    color: colors.dark01,
    textTransform: "capitalize"
});

const headerOptionsStyle = css({
    display: "flex",
    alignItems: "center",
    gap: "24px",
})

const headerDropdownStyles = css({
    position: "relative"
})

const headerDropdownListStyles = css({
    position: "absolute",
    top: "100%",
    right: "0px",
    zIndex: 20,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    backgroundColor: colors.white,
    boxShadow: "0px 10px 20px rgba(54, 78, 126, 0.25)",
    borderRadius: "8px",
    marginTop: "28px",
    width: "192px",
    height: "auto",
    padding: "16px",

    '&[data-toggle="false"]': {
        display: "none"
    }
})

const headerDropdownListItemStyles = (isBoardListEmpty: boolean | undefined) => css({
    ...body01,
    width: "100%",
    textAlign: "left",
    cursor: isBoardListEmpty ? "not-allowed" : "pointer"
})

interface HeaderProps {
    style?: any;
    disabled?: boolean;
    showSidebar?: boolean;
    handleToggleAddTask?: () => void;
}

export const Header = ({ style, showSidebar }: HeaderProps) => {
    const currentBoard = useSelector((state: RootState) => state.board.currentBoard)
    const columns = useSelector((state: RootState) => state.column.columns)
    const dispatch = useDispatch()
    const [toggleDropdown, setToggleDropdown] = useState(false);

    const dropdownRef = useRef(null);

    const handleToggleDropdown = () => {
        setToggleDropdown(!toggleDropdown)
    }

    useClickAway(dropdownRef, () => {
        setToggleDropdown(false)
    });


    return (
        <div style={style} className={headerStyles}>
            {Boolean(showSidebar === false) && <div className={headerLogoStyles}><LogoDark /></div>}
            <div className={headerNavigationStyles}>
                <h3 className={headerTitleStyles}>{currentBoard?.name}</h3>
                <div className={headerOptionsStyle}>
                    {checkIfListEmpty(columns) ? null : <div style={{ width: "164px" }}>
                        <Button handleClick={() => dispatch(openModal('ADD_TASK'))} type="button" disabled={checkIfListEmpty(columns)} variant="primary" size="sm" >+ Add New Task</Button>
                    </div> }
                    <div ref={dropdownRef} className={headerDropdownStyles}>
                        <button onClick={handleToggleDropdown} type="button">
                            <OverflowMenu />
                        </button>
                        <div data-toggle={Boolean(toggleDropdown)} className={headerDropdownListStyles}>
                            <button style={{ color: colors.gray01 }} className={headerDropdownListItemStyles(showSidebar)}>Edit Board</button>
                            <button style={{ color: colors.red01 }} className={headerDropdownListItemStyles(showSidebar)}>Delete Board</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}