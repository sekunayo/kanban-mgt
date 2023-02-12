import { colors } from "@/styles/colors";
import { body02 } from "@/styles/typography";
import { InputType } from "@/types/component";
import { css } from "@emotion/css"
import { useField } from "formik";


const inputContainerStyles = css({
    display: "flex",
    flexDirection: "column",
    gap: "8px",

    "& label": {
        ...body02,
        color: colors.gray01,
    }
})

const inputStyles = css({
    backgroundColor: colors.white,
    border: "1px solid rgba(130, 143, 163, 0.25)",
    borderRadius: "4px",
    width: "100%",
    height: "40px",
    padding: "8px 16px 9px 16px",

    '& input': {
        width: "100%",
        height: "100%",
        border: "none",
        outline: "0px",
        backgroundColor: "transparent",
        ...body02,
        color: colors.dark01,
        overflowX: "auto",

        '&::placeholder': {
            color: `rgba(${colors.dark01}, 0.25)`
        }
    }
})


interface InputProps {
    placeholder?: string;
    label?: string;
    type: InputType;
    name: string;
    style?: any;
}

export const Input = ({ placeholder, label, style, ...props }: InputProps) => {
    const [field, meta, helpers] = useField(props);

    const isError = meta.touched && meta.error;

    return (
        <div style={style} className={inputContainerStyles}>
            <label>{label}</label>
            <div className={inputStyles}>
                <input {...field} {...props} placeholder={placeholder}></input>

                {isError ? (
                    <p>{meta.error}</p>
                ) : null}
            </div>
        </div>
    )
}