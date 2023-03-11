import { closeModal } from "@/slices/modal";
import { RootState } from "@/store";
import { modals } from "@/utils/modal";
import { css } from "@emotion/css"
import { useRef } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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

export const ModalManager = () => {
    const domNode = document.getElementById('modal');
    const dispatch = useDispatch()
    const { modalType } = useSelector((state: RootState) => state.modal)
    const modalContentRef = useRef(null);

    useClickAway(modalContentRef, () => {
        dispatch(closeModal())
    });

    return (
        <>
            {
              createPortal(<div className={modalStyles}>
                    <div ref={modalContentRef} >
                        {modals[modalType]}
                    </div>
                </div>, domNode!)
            }
        </>

    )
}