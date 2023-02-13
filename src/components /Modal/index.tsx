import { css } from "@emotion/css"
import { useRef } from "react";
import { useClickAway } from "react-use";

const modalStyles = css({
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: "0px",
    left: "0px"
})

interface ModalProps {
    children: any;
    handleToggleModal: () => void;
}

export const Modal = ({ children, handleToggleModal }: ModalProps) => {

    const modalContentRef = useRef(null);

    useClickAway(modalContentRef, () => {
        handleToggleModal()!
    });


    return (
        <div className={modalStyles}>
            <div ref={modalContentRef} >
                {children}
            </div>
        </div>
    )
}