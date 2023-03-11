import { css } from "@emotion/css"

import { BoardLayout } from "@/layout/BoardLayout"


const platformLaunchStyles = css({
    width: "100%",
    height: "calc(100vh - 96px)",
    overflow: "auto",
})

const PlatformLaunch = () => {
    return (
        <div className={platformLaunchStyles}>
            <BoardLayout />
        </div>
    )
}

export default PlatformLaunch;