import { colors } from "@/styles/colors";
import { heading01 } from "@/styles/typography";
import { css } from "@emotion/css";
import { Button } from "../Button";
import { ReactComponent as OverflowMenu } from "@/assets/icons/icon-vertical-ellipsis.svg";


const headerStyles = css({
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "96px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 42px 28px 24px",
    position: "sticky",
    top: "0",
    left: "0 "
})

const headerTitleStyles = css({
    ...heading01,
    color: colors.dark01
});

const headerOptionsStyle = css({
    display: "flex",
    alignItems: "center",
    gap: "24px",

})

interface HeaderProps {
    headerTitle: string;
    style?: any;
}

export const Header = ({ headerTitle , style}: HeaderProps) => {
    return (
        <div style={style} className={headerStyles}>
            <h3 className={headerTitleStyles}>{headerTitle}</h3>
            <div className={headerOptionsStyle}>
                <div style={{ width: "164px" }}>
                    <Button variant="primary" size="sm" >+ Add New Task</Button>
                </div>
                <OverflowMenu />
            </div>
        </div>
    )
}