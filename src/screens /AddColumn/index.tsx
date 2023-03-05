import { Button } from "@/components /Button";
import { Input } from "@/components /Input";
import { Modal } from "@/components /Modal";
import { colors } from "@/styles/colors";
import { ColumnInput } from "@/types/schema";
import { colorPickerArray } from "@/utils/constants";
import { hexToRgb } from "@/utils/helpers";
import { addColumnInitialValues } from "@/utils/initialValues";
import { css } from "@emotion/css"
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { handleColorPicker } from "./addColumn";

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

const addColumnColorPreviewStyles = (color: string) => css({
    width: "100%",
    height: "40px",
    borderRadius: "3px",
    backgroundColor: `rgba(${hexToRgb(color)}, 0.4)`,
    display: "flex",
    alignItems: "center"
})

const addColumnColorPreviewCircleStyles = (color: string) => css({
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: color,
    marginLeft: "16px",
})

interface ColorPickerProps {
    color: string;
    setColorValue: React.Dispatch<React.SetStateAction<string>>;
}

interface AddColumnModal {
    handleToggleColumn: () => void;
    handleAddColumn: (values: ColumnInput) => void;
}

interface AddColumnProps {
    handleAddColumn: (values: ColumnInput) => void;
    handleToggleColumn: () => void;
}

export const AddColumnModal = ({ handleToggleColumn, handleAddColumn }: AddColumnModal) => {
    const domNode = document.getElementById('addColumnModal');

    return (
        <>
            {createPortal(
                <Modal handleToggleModal={handleToggleColumn}>
                    <AddColumn handleToggleColumn={handleToggleColumn} handleAddColumn={handleAddColumn} />
                </Modal>, domNode!)}
        </>
    )
}

const AddColumn = ({ handleAddColumn, handleToggleColumn }: AddColumnProps) => {
    const [colorValue, setColorValue] = useState("");

    return (
        <div
            className={addColumnStyles}>
            <h4>Add New Column</h4>

            <Formik initialValues={addColumnInitialValues}
                onSubmit={(values, actions) => {
                    handleAddColumn({
                        columnName: values.columnName,
                        color: colorValue
                    })
                    actions.resetForm();
                    handleToggleColumn();
                }}

            >
                <Form className={addColumnFormStyles}>
                    <Input name="columnName" type="text" label="Name" placeholder='e.g Todo' />
                    {Boolean(colorValue !== "")  ?  <div className={addColumnColorPreviewStyles(colorValue)}>
                        <div className={addColumnColorPreviewCircleStyles(colorValue)}></div>
                    </div> : null}
                    <div className={addColumnColorPickerStyles}>
                        {
                            colorPickerArray.map((element, index) => {
                                return (
                                    <ColorPicker key={index + 1} setColorValue={setColorValue} color={element} />
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

const ColorPicker = ({ color, setColorValue }: ColorPickerProps) => {

    const [colorPickerActiveState, setColorPickerActiveState] = useState(false);

    const toggleColorPickerActive = () => {
        setColorPickerActiveState(!colorPickerActiveState);
        setColorValue(color)
    }

    return (
        <button type="button" onClick={toggleColorPickerActive} onFocus={toggleColorPickerActive} className={colorPickerStyles(color)}></button>
    )
}