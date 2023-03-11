import { Button } from "@/components /Button";
import { openModal } from "@/slices/modal";
import { colors } from "@/styles/colors";
import { heading02 } from "@/styles/typography";
import { css } from "@emotion/css";
import { useDispatch } from "react-redux";

interface EmptyLayoutProps {
    text: string;
    btnLabel: string;
    handleToggle: () => void;
}

const emptyContainerStyles = css({
    display: "flex",
    width: "100%",
    height: "calc(100vh - 96px)",
    justifyContent: "center",
    alignItems: "center",
    overflowY: "hidden"
})

const emptyContainerBoxStyles = css({
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    justifyContent: "center",
    alignItems: "center",

    "& h4": {
        color: colors.gray01,
        ...heading02
    }
})


export const EmptyLayout = ({ text, btnLabel, handleToggle }: EmptyLayoutProps) => {
    const dispatch = useDispatch()
        return (
            <div className={emptyContainerStyles}>
                <div className={emptyContainerBoxStyles}>
                    <h4>{text}</h4>
                    <div style={{ width: "174px" }}>
                        <Button handleClick={handleToggle} type="button" variant="primary" size="sm" >{btnLabel}</Button>
                    </div>
                </div>
            </div>
        )
}