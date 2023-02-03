import { css } from "@emotion/css";

import { getButtonSize, getButtonVariant } from "./button";

import { ButtonSizeType, ButtonVariantType } from "@/types/component";
import { buttonText } from "@/styles/typography";

const buttonStyle = (backgroundColor: string, height: string, color: string) => css({
    backgroundColor,
    borderRadius: "24px",
    width: "100%",
    height: height,
    color: color,
    ...buttonText
})

interface ButtonProps {
    variant: ButtonVariantType;
    size: ButtonSizeType;
    children?: any;
    handleClick?: () => void;
}

export const Button = ({variant, size, children}: ButtonProps) => {

    const {color, backgroundColor} = getButtonVariant(variant);
    const {height} = getButtonSize(size);

    return (
        <button className={buttonStyle(backgroundColor, height , color)}>{children}</button>
    )
}