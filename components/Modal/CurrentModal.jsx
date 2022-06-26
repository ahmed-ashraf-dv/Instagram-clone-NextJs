import React from "react";
import NewPostModal from "./Modals/NewPostModals";
import PreviewPostModal from "./Modals/PreviewPostModal";

const CurrentModal = ({ type }) => {
  return (
    <>
      {type === "New Post" ? (
        <NewPostModal />
      ) : type === "Preview Post" ? (
        <PreviewPostModal />
      ) : (
        ""
      )}
    </>
  );
};

export default CurrentModal;
