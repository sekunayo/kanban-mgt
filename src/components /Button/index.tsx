import { css } from "@emotion/css";

import { ButtonSizeType, ButtonVariantType } from "@/types/component";

import { colors } from "@/styles/colors";
import { buttonText } from "@/styles/typography";

const buttonStyle = (variant: ButtonVariantType, size: ButtonSizeType) => css({
    backgroundColor : variant === 'primary' ? colors.primary : variant === 'secondary' ? "rgba(99, 95, 199, 0.1)" : colors.red01,
    borderRadius: size ===  "sm" ? '24px' : '20px',
    width: "100%",
    height: size ===  "sm" ? '40px' : '48px',
    color : variant === 'primary' ? colors.white : variant === 'secondary' ? colors.primary : colors.white,
    ...buttonText,
    textAlign: "center",
    '&:hover': {
        backgroundColor: variant === 'primary' ? colors.secondary01 : variant === 'secondary' ? 'rgba(99, 95, 199, 0.25)' : colors.red02,
    }
})

interface ButtonProps {
    variant: ButtonVariantType;
    size: ButtonSizeType;
    children?: any;
    style?: any;
    disabled?: boolean;
    handleClick?: () => void;
}


export const Button = ({variant, size, children, style, disabled}: ButtonProps) => {

    return (
        <button style={style} disabled={disabled} className={buttonStyle(variant, size)}>{children}</button>
    )
}