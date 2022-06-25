import React from "react";
import style from "../../styles/modal.module.scss";
import CurrentModal from "./CurrentModal";

import { motion } from "framer-motion";

import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../store/ModalSlice";

const Modal = () => {
  const dispatch = useDispatch();

  const { isOpen, currentData, type } = useSelector(
    ({ ModalSlice }) => ModalSlice
  );

  const getTypeClass = () => {
    return type === "New Post"
      ? style.newPost
      : type === "Preview Post"
      ? style.previewPost + " align-items-start"
      : "";
  };

  return (
    <>
      {isOpen && (
        <div className={`${style.modalBox}`}>
          <div
            onClick={() => dispatch(closeModal())}
            className={`${style.backDrop} flex-center`}
          >
            {/* Close Modal */}
            <button
              onClick={() => dispatch(closeModal())}
              type="button"
              className="btn-close btn-close-white position-absolute top-0 start-0 p-4 small"
              aria-label="Close"
            />
          </div>

          {/* Modal */}
          <motion.main
            className={`${style.modal} ${getTypeClass()}`}
            transition={{ duration: 0.19 }}
            animate={{ scale: [1.2, 1] }}
          >
            <CurrentModal />
          </motion.main>
        </div>
      )}
    </>
  );
};

export default Modal;
