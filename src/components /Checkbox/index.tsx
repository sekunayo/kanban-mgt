import { colors } from "@/styles/colors";
import { body02 } from "@/styles/typography";
import { css } from "@emotion/css"
import { Field, useField } from "formik"

const checkboxStyle = css({
    backgroundColor: "#F4F7FD",
    borderRadius: "4px",
    width: "100%",
    height: "40px",
    display: "flex",
    alignItems: "center",
    padding: "13px 0px 12px 12px",
    cursor: "pointer",

    "&:hover": {
        backgroundColor: "rgba(99, 95, 199, 0.25)",
        mixBlendMode: "normal",
    },

    '& input[type="checkbox"]:checked':{
        backgroundColor: "#F4F7FD",
    },

    'label > input[type="checkbox"]:checked + span':{
        textDecoration: "line-through",
        color: "rgba(0,1,18, 0.25)"
     }

})

const checkboxLabelStyle = css({
    color: colors.dark01,
    ...body02,
    textTransform: "capitalize",
    display: "flex",
    alignItems: "center",
    height: "100%"

})

interface CheckboxProps {
    label?: string;
    name: string;
    style?: any;
}

export const Checkbox = ({name, style, label }: CheckboxProps) => {
    // const [field, meta, helpers] = useField({name: name, type: "checkbox"});

    // const isChecked = Boolean(meta.touched === true) && Boolean(field.checked === true)

    return (
        <div style={style} className={checkboxStyle}>
            <label className={checkboxLabelStyle}>
                <Field style={{ marginRight: "16px", height: "16px", width: "16px" }} type="checkbox" name={name} />
                <span>{label}</span>
            </label>
        </div>
    )
}