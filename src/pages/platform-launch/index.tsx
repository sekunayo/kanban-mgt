import { Button } from "@/components /Button"
import { AddColumnModal } from "@/screens /AddColumn"
import { colors } from "@/styles/colors"
import { heading02 } from "@/styles/typography"
import { css } from "@emotion/css"
import { useState } from "react"

const emptyContainerStyles = css({
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    justifyContent: "center",
    alignItems: "center",

    "& h4": {
        color: colors.gray01,
        ...heading02
    }
})

const platformLaunchStyles = css({
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

interface PlatformLaunchProps {
    handleToggleColumn: () => void;
}

const PlatformLaunch = () => {

    const [openAddColumn, setOpenAddColumn] = useState(false);

    const handleToggleColumn = () =>{
        setOpenAddColumn(!openAddColumn)
    }

    return (
        <div className={platformLaunchStyles}>
            <PlatformLaunchIsEmpty handleToggleColumn={handleToggleColumn} />

            {openAddColumn && <AddColumnModal handleToggleColumn={handleToggleColumn} />}
        </div>
    )
}

const PlatformLaunchIsEmpty = ({handleToggleColumn}: PlatformLaunchProps) => {
    return (
        <div className={emptyContainerStyles}>
            <h4>This board is empty. Create a new column to get started.</h4>
            <div style={{ width: "174px" }}>
                <Button handleClick={handleToggleColumn} type="button" variant="primary" size="sm" >+ Add New Column</Button>
            </div>
        </div>
    )
}

export default PlatformLaunch;