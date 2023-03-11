import { css } from "@emotion/css"
import { Form, Formik } from "formik";
import { createPortal } from "react-dom";

import { Button } from "@/components /Button";
import { Input } from "@/components /Input";

import { colors } from "@/styles/colors";

import { addBoardInitialValues } from "@/utils/initialValues";
import { addBoard } from "@/slices/board";
import { useDispatch } from "react-redux";
import { closeModal } from "@/slices/modal";

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


export const AddBoard = () => {
    const dispatch = useDispatch();
    return (
        <div
            className={addBoardStyles}>
            <h4>Add New Board</h4>

            <Formik initialValues={addBoardInitialValues}
                onSubmit={(values, actions) => {
                    dispatch(addBoard({
                        name: values.name,
                        columns: []
                    }))
                    actions.resetForm();
                    dispatch((closeModal()))

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
