import { css } from "@emotion/css";

import { colors } from "@/styles/colors";
import { body01 } from "@/styles/typography";

import { hexToRgb } from "@/utils/helpers";

import { ReactComponent as Close } from "@/assets/icons/icon-cross.svg";
import { useField } from "formik";


const textSelectStyles = css({
    backgroundColor: colors.white,
    border: "1px solid rgba(130, 143, 163, 0.25)",
    borderRadius: "4px",
    ...body01,
    width: "100%",
    height: "40px",
    padding: "0px 16px",
    outline: "none",

    "&::placeholder": {
        color: `rgba(${hexToRgb("#000112")}, 0.25)`
    }
})

const textSelectContainerStyle = css({
    display: "flex",
    alignItems: "center",
    gap: "16px"
})

interface TextSelectProps {
    name: string
}

export const TextSelect = ({...props}: TextSelectProps) => {
    const [field, meta, helpers] = useField(props);

    const isError = meta.touched && meta.error;

    return (
        <div className={textSelectContainerStyle}>
            <input {...field} {...props} className={textSelectStyles} placeholder="e.g Make Coffee" ></input>
            <Close style={{fill: isError ? colors.red01 : colors.gray01}} />
        </div>
    )
}