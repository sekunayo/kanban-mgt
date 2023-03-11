import { colors } from "@/styles/colors"
import { body01 } from "@/styles/typography"

import { css } from "@emotion/css"

import { ReactComponent as ChevronDown } from "@/assets/icons/icon-chevron-down.svg"

const dropdownStyles = css({
    border: "1px solid rgba(130, 143, 163, 0.25)",
    borderRadius: "4px",
    width: "100%", 
    position: "relative"
})

const dropdownListStyles = css({
    borderRadius: "8px",
    backgroundColor: colors.white,
    boxShadow: "0px 10px 20px rgba(54, 78, 126, 0.25)",
    position: "absolute", 
    top: "100%",
    right: "0px",
    marginTop: "7px"
})

const dropdownListItemStyles = css({
    ...body01,
    color: colors.gray01
})

interface DropdownProps {
    list: string[]
}

export const Dropdown = ({ list }: DropdownProps) => {
    return (
        <div className={dropdownStyles}>
            <p>dropdown</p>
            <ChevronDown />
            <ul className={dropdownListStyles}>
                {
                    list.map((element: string) => {
                        return (
                            <li className={dropdownListItemStyles}>{element}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}