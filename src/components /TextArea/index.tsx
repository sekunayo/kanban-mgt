import { colors } from "@/styles/colors";
import { body01, body02 } from "@/styles/typography";
import { hexToRgb } from "@/utils/helpers";
import { css } from "@emotion/css";
import { useField } from "formik";
import React from "react";

interface TextareaProps {
    name: string
    label?: string
    placeholder?: string
}

const textareaStyles = css({
    backgroundColor: colors.white,
    border: "1px solid rgba(130, 143, 163, 0.25)",
    borderRadius: "4px",
    padding: "8px 25px 0px 16px",
    width: "100%",
    height: "112px",


    "&::placeholder": {
        color: `rgba(${hexToRgb("#000112")}, 0.25)`,
        ...body01
    }
})

const textareaLabelStyles = css({
    ...body02,
    color: colors.gray01
})


export const TextArea = ({ label, placeholder, ...props}: TextareaProps) => {
    const [field, meta, helpers] = useField(props);

    const isError = meta.touched && meta.error;

    return (
        <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
            {label && <label className={textareaLabelStyles}>{label}</label>}
            <textarea className={textareaStyles} placeholder={placeholder} {...field} {...props}></textarea>
        </div>
    )
}