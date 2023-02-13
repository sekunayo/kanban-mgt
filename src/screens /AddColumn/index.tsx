import { Button } from "@/components /Button";
import { Input } from "@/components /Input";
import { colors } from "@/styles/colors";
import { colorPickerArray } from "@/utils/constants";
import { css } from "@emotion/css"
import { Form, Formik } from "formik";
import { useState } from "react";
import { handleAddColumn } from "./addColumn";

const addColumnStyles = css({
    width: "480px",
    height: "auto",
    backgroundColor: colors.white,
    borderRadius: "6px",
    padding: "32px"
})

const addColumnFormStyles = css({
    marginTop: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "24px"
})

const addColumnColorPickerStyles = css({
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "8px",
    width: "100%",
})

const colorPickerStyles = (backgroundColor: string) => css({
    width: "100%",
    height: "32px",
    borderRadius: "3px",
    border: "2px solid transparent ",
    backgroundColor: backgroundColor,

    '&:active': {
        outline: `2px solid ${backgroundColor}`,
        border: '2px solid white',
        padding: "5px",
    },

    '&:focus': {
        outline: `2px solid ${backgroundColor}`,
        border: '2px solid white',
        padding: "5px",
    }

})

interface AddColumnProps {
    color: string;
}

export const AddColumn = () => {
    return (
        <div className={addColumnStyles}>
            <h4>Add New Column</h4>

            <Formik initialValues={{
                columnName: ""
            }}
                onSubmit={(values, actions) => {
                    handleAddColumn(values.columnName)
                    actions.resetForm();
                }}

            >
                <Form className={addColumnFormStyles}>
                    <Input name="columnName" type="text" label="Name" placeholder='e.g Todo' />
                    <div className={addColumnColorPickerStyles}>
                        {
                            colorPickerArray.map((element, index) => {
                                return (
                                    <ColorPicker key={index + 1} color={element} />
                                )
                            })
                        }
                    </div>
                    <Button type="submit" variant="primary" size="sm" >Create New Column</Button>
                </Form>
            </Formik>
        </div>
    )
}

const ColorPicker = ({ color }: AddColumnProps) => {

    const [colorPickerActiveState, setColorPickerActiveState] = useState(false);

    const toggleColorPickerActive = () => {
        setColorPickerActiveState(!colorPickerActiveState);
    }

    return (
        <button type="button" onClick={toggleColorPickerActive } onFocus={toggleColorPickerActive} className={colorPickerStyles(color)}></button>
    )
}