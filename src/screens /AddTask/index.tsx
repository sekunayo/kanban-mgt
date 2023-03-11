import React, { useState } from "react";
import { colors } from "@/styles/colors";
import { css } from "@emotion/css";
import { Checkbox } from "@/components /Checkbox";
import { body01, body02, heading02 } from "@/styles/typography";
import { Formik, Form } from "formik";
// import { addTaskSubtaskInitialValues } from "@/utils/initialValues";
import { TaskInput, TaskResponse } from "@/types/schema";
import { Input } from "@/components /Input";
import { createPortal } from "react-dom";
import { TextArea } from "@/components /TextArea";
import { hexToRgb } from "@/utils/helpers";
import { Button } from "@/components /Button";
import { TextSelect } from "@/components /TextSelect";

const addTaskStyles = css({
    backgroundColor: colors.white,
    borderRadius: "6px",
    maxHeight: "675px",
    overflowY: "auto",
    padding: "32px",
    width: "480px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    cursor: "not-allowed",
})

const addTaskHeadingStyle = css({
    ...heading02,
    color: colors.dark01,
})

const addTaskSubHeadingStyle = css({
    ...body02,
    color: colors.gray01,
    marginBottom: "8px"
})

const addTaskSubtaskStyle = css({
    display: "flex",
    flexDirection: "column",
    gap: "8px"
})



const addTaskSubtaskListStyle = css({
    display: "flex",
    flexDirection: "column",
    gap: "12px"
})


export const AddTask = () => {
    // const checkedSubtasks  = task ? Object.values(task.subtasks)?.filter((element) => element ? element.isCompleted === true : null) : null;
    // const subTasksLength = task?.subtasks?.length

    const [subTasksText, setSubTasksText] = useState<string[] | []>([]);

    const handleSubTasks = (index: number = 0) => {
        setSubTasksText([...subTasksText, `${index+1}` ])
    }

    return (
        <div className={addTaskStyles}>
            <h4 className={addTaskHeadingStyle}>Add New Task</h4>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "16px" }}>
                <Formik initialValues={{}} onSubmit={(values, action) => {
                    console.log(values)
                    console.log('close modal')
                }

                }>
                    <Form className={addTaskSubtaskStyle}>
                        <Input name="title" type="text" label="Title" />
                        <TextArea label="Description" name="description" placeholder="e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little." />


                        <div>
                            <h6 className={addTaskSubHeadingStyle}>Subtasks</h6>
                            <div className={addTaskSubtaskListStyle}>
                                {
                                    subTasksText.map((element: string, index: number) => {
                                        return(
                                            <TextSelect name={`subtask${index + 1}`} />
                                        )
                                    })
                                }
                                <Button type="button" handleClick={handleSubTasks} children="+ Add New Subtask" variant="secondary" size="sm" />
                            </div>
                        </div>


                        <h6 className={addTaskSubHeadingStyle}>Status</h6>


                    </Form>
                </Formik>
            </div>
        </div>
    )
}