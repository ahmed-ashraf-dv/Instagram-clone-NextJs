import React from "react";
import { motion } from "framer-motion";
import style from "../../styles/modal.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { closeModal as closeEditModal } from "../../store/EditPostModalSlice";
import { closeModal as closePreviewModal } from "../../store/ModalSlice";

import axios from "axios";

import copy from "../../utils/copy";
import useCookie from "../../hooks/useCookie";

const EditPost = () => {
  const { isOpen, isPuplisher, link } = useSelector(
    ({ EditPostModalSlice }) => EditPostModalSlice
  );

  const dispatch = useDispatch();
  const cookie = useCookie();

  const copyLink = () => {
    link = `${window.location.origin}/${link}`;

    copy(link);

    dispatch(closeEditModal());
  };

  const deletePost = async () => {
    const splitLink = link.split("/");
    const linkWithoutEmpty = splitLink.filter((string) => string);

    const postId = linkWithoutEmpty.at(-1);
    const token = cookie.get("token");

    // Send Request
    const { data } = await axios.delete(
      `/api/delpost/${postId}?token=${token}`
    );

    if (data.code === 200) {
      dispatch(closePreviewModal());
      dispatch(closeEditModal());
    } else {
      alert(data.message);
    }
  };

  return (
    isOpen && (
      <div className={`${style.modalBox}`}>
        <div
          onClick={() => dispatch(closeEditModal())}
          className={`${style.backDrop} flex-center`}
        />

        {/* Modal */}
        <motion.main
          className={`${style.modal} ${style.editModal}`}
          transition={{ duration: 0.19 }}
          animate={{ scale: [1.2, 1] }}
        >
          <ul className="fw-200 list-unstyled m-0">
            <li onClick={copyLink} className="cu-pointer p-2">
              <p>Copy link</p>
            </li>
            {isPuplisher && (
              <li
                onClick={deletePost}
                className="cu-pointer p-2 border border-bottom-0 border-start-0 border-end-0"
              >
                <p className="text-danger">Delete post</p>
              </li>
            )}
          </ul>
        </motion.main>
      </div>
    )
  );
};

export default EditPost;
