import React from "react";

import { useDispatch } from "react-redux";
import { openModal } from "../../store/EditPostModalSlice";

const EditPostBtn = ({
  postId,
  clientUsername,
  puplisherUsername,
  style = {},
  noDel = false
}) => {
  const dispatch = useDispatch();

  const openEditModal = () => {
    // if this puplisher
    dispatch(
      openModal({
        isPuplisher: puplisherUsername === clientUsername,
        link: `profile/${puplisherUsername}/${postId}`,
        noDel
      })
    );
  };

  return (
    <div
      style={style}
      onClick={openEditModal}
      className="flex-center edit-post select-none me-2 fw-bold cu-pointer fs-5"
    >
      <p>...</p>
    </div>
  );
};

export default EditPostBtn;
