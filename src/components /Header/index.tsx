import { colors } from "@/styles/colors";
import { body01, heading01 } from "@/styles/typography";
import { css } from "@emotion/css";
import { Button } from "../Button";
import { ReactComponent as OverflowMenu } from "@/assets/icons/icon-vertical-ellipsis.svg";
import { ReactComponent as LogoDark } from "@/assets/icons/logo-dark.svg";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";


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
    headerTitle?: string;
    style?: any;
    disabled?: boolean;
    showSidebar?: boolean;
    isColumnListEmpty?: boolean;
    openAddTask?: boolean;
    handleToggleAddTask?: () => void;
}

export const Header = ({ headerTitle, style, disabled, showSidebar, isColumnListEmpty, handleToggleAddTask }: HeaderProps) => {
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
                <h3 className={headerTitleStyles}>{headerTitle}</h3>
                <div className={headerOptionsStyle}>
                    {isColumnListEmpty ? null : <div style={{ width: "164px" }}>
                        <Button handleClick={handleToggleAddTask} type="button" disabled={disabled} variant="primary" size="sm" >+ Add New Task</Button>
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