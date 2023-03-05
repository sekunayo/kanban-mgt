import { colors } from "@/styles/colors";
import { css } from "@emotion/css";
import React, { useState } from "react";

const switchStyles = (toggleSwitch: boolean) => css({
    width: "40px",
    height: "20px",
    backgroundColor: "#635FC7",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: toggleSwitch ? "flex-end" : "flex-start",
    padding: "0px 4px"
})

const switchBallStyles = css({
    width: "14px",
    height: "14px",
    backgroundColor: colors.white,
    borderRadius: "50%"
})

export const Switch = () => {
    const [toggleSwitch, setToggleSwitch] = useState(false);

    const handleToggleSwitch = () => {
        setToggleSwitch(!toggleSwitch)
    }
    return (
        <button type="button" onClick={handleToggleSwitch} className={switchStyles(toggleSwitch)}>
            <div className={switchBallStyles}>
            </div>
        </button>
    )
}