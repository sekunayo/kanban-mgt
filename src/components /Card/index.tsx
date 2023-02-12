import { colors } from "@/styles/colors";
import { body02, heading03 } from "@/styles/typography";
import { css } from "@emotion/css";

const cardStyles = css({
    backgroundColor: colors.white,
    boxShadow: "0px 4px 6px rgba(54, 78, 126, 0.101545)",
    borderRadius: "8px",
    height: "auto",
    width: "280px",
    padding: "23px 16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "8px",

    "& h3":{
        ...heading03,
        color: colors.dark01
    },

    "& p": {
        color: colors.gray01,
        ...body02
    }
});

interface CardProps {
    title : string;
    subTaskCurrentCount: number;
    subTaskTotal: number;
    style?: any;
}
export const Card = ({title, subTaskCurrentCount, subTaskTotal, style}: CardProps) => {
    return (
        <div style={style} className={cardStyles}>
            <h3>{title}</h3>
            <p>{subTaskCurrentCount} of {subTaskTotal} subtasks</p>
        </div>
    )
}