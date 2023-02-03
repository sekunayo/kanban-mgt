import { colors } from "@/styles/colors";
import { buttonText } from "@/styles/typography";
import { ButtonSizeType, ButtonVariantType } from "@/types/component";

const button = {
    borderRaduis: "20px",
    ...buttonText,
}

const buttonPrimary = {
    ...button,
    color: colors.white,
    backgroundColor: colors.primary,
}

const buttonPrimaryHover = `& :hover:{
    backgroundColor: #A8A4FF;
}`
const buttonSecondary = {
    ...button,
    color: colors.primary,
    backgroundColor: "rgba(99, 95, 199, 0.1)"
}

const buttonDestructive = {
    ...button,
    color: colors.white,
    backgroundColor: colors.red01
}

const buttonSmall = {
    height: "40px"
}

export const buttonLarge = {
    height: "48px"
}

export const getButtonVariant = (variantType: ButtonVariantType) => {
    switch (variantType) {
        case "primary":
            return { ...buttonPrimary , buttonPrimaryHover}
        case "secondary":
            return { ...buttonSecondary }
        case "destructive":
            return {...buttonDestructive}
        default:
            return { ...buttonPrimary }
    }
}

export const getButtonSize = (sizeType: ButtonSizeType) => {
    switch (sizeType) {
        case "sm":
            return { ...buttonSmall }
        case "lg":
            return { ...buttonLarge }
        default:
            return { ...buttonSmall }
    }
}