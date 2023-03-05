import { css } from "@emotion/css"
import { Form, Formik } from "formik";
import { createPortal } from "react-dom";

import { Button } from "@/components /Button";
import { Input } from "@/components /Input";
import { Modal } from "@/components /Modal";

import { colors } from "@/styles/colors";
import { BoardInput } from "@/types/schema";

import { addBoardInitialValues } from "@/utils/initialValues";

const addBoardStyles = css({
    width: "480px",
    height: "auto",
    backgroundColor: colors.white,
    borderRadius: "6px",
    padding: "32px"
})

const addBoardFormStyles = css({
    marginTop: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "24px"
})

interface AddBoardModal {
    handleToggleBoard: () => void;
    handleAddBoard: (values: BoardInput) => void;
}

interface AddBoardProps {
    handleAddBoard: (values: BoardInput) => void;
    handleToggleBoard: () => void;
}

export const AddBoardModal = ({ handleToggleBoard, handleAddBoard }: AddBoardModal) => {
    const domNode = document.getElementById('addBoardModal');

    return (
        <>
            {createPortal(
                <Modal handleToggleModal={handleToggleBoard}>
                    <AddBoard handleToggleBoard={handleToggleBoard} handleAddBoard={handleAddBoard} />
                </Modal>, domNode!)}
        </>
    )
}

const AddBoard = ({ handleAddBoard, handleToggleBoard }: AddBoardProps) => {
    return (
        <div
            className={addBoardStyles}>
            <h4>Add New Board</h4>

            <Formik initialValues={addBoardInitialValues}
                onSubmit={(values, actions) => {
                    handleAddBoard({
                        name: values.name,
                        columns: []
                    })
                    actions.resetForm();
                    handleToggleBoard();
                }}

            >
                <Form className={addBoardFormStyles}>
                    <Input name="name" type="text" label="Name" placeholder='e.g Platform Launch' />
                    <Button type="submit" variant="primary" size="sm" >Create New Board</Button>
                </Form>
            </Formik>
        </div>


    )
}
