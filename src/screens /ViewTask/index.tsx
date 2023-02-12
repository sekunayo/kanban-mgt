import React from "react";
import { colors } from "@/styles/colors";
import { css } from "@emotion/css";
import { Checkbox } from "@/components /Checkbox";
import { body01, body02, heading02 } from "@/styles/typography";
import { Formik, Form } from "formik";
import { viewTaskSubtaskInitialValues } from "@/utils/initialValues";

const viewTaskStyles = css({
    backgroundColor: colors.white,
    borderRadius: "6px",
    height: "auto",
    padding: "32px",
    width: "480px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    cursor: "not-allowed",
})

const viewTaskHeadingStyle = css({
    ...heading02,
    color: colors.dark01,
})

const viewTaskDescriptionStyle = css({
    ...body01,
    color: colors.gray01,
})

const viewTaskSubHeadingStyle = css({
    ...body02,
   color: colors.gray01
})

const viewTaskSubtaskStyle = css({
    display: "flex",
    flexDirection: "column", 
    gap: "8px"
})

interface ViewTaskProps {
    heading: string;
    description: string;
    subTasks: Array<{label: string, checked: Boolean}>

}

export const ViewTask = ({ heading, description, subTasks }: ViewTaskProps) => {
    const checkedSubtasks  = Object.values(subTasks).filter((element) => element.checked === true);
    const subTasksLength = subTasks.length

    return (
        <div className={viewTaskStyles}>
            <h4 className={viewTaskHeadingStyle}>{heading}</h4>
            <p className={viewTaskDescriptionStyle}>{description}</p>

            <div style={{display: "flex", flexDirection: "column", gap: "8px", marginTop: "16px"}}>
                <h6 className={viewTaskSubHeadingStyle}>{`Subtasks (${checkedSubtasks.length} of ${subTasksLength})`}</h6>
                <Formik initialValues={viewTaskSubtaskInitialValues} onSubmit={(values, action) => console.log(values)}>
                    <Form className={viewTaskSubtaskStyle}>
                    {
                        subTasks.map((element: {label: string, checked: Boolean} , index: number) => {
                            return (
                                <Checkbox style={{pointerEvents: "none"}} key={index + 1} name={`subTask${index + 1}`} label={element.label} />
                            )
                        })
                    }
                    </Form>
                </Formik>
            </div>

            <div>
                <h6 className={viewTaskSubHeadingStyle}>Current Status</h6>
            </div>
        </div>
    )
}