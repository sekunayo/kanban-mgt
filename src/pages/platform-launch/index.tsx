import { Button } from "@/components /Button"
import { colors } from "@/styles/colors"
import { heading02 } from "@/styles/typography"
import { css } from "@emotion/css"

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
 
const PlatformLaunch = () => {
    return (
        <div className={platformLaunchStyles}>
            <PlatformLaunchIsEmpty />
        </div>
    )
}


const PlatformLaunchIsEmpty = () => {
    return (
        <div className={emptyContainerStyles}>
            <h4>This board is empty. Create a new column to get started.</h4>
            <div style={{ width: "174px" }}>
                <Button variant="primary" size="sm" >+ Add New Column</Button>
            </div>
        </div>
    )
}

export default PlatformLaunch;