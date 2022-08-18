import React from "react";

import NewPostModal from "./Modals/NewPostModals";
import PreviewPostModal from "./Modals/PreviewPostModal";
import ShowUsersModal from "./Modals/ShowUsersModal";

const CurrentModal = ({ type }) => {
  return (
    <>
      {type === "New Post" ? (
        <NewPostModal />
      ) : type === "Preview Post" ? (
        <PreviewPostModal />
      ) : type === "Followers" || type === "Following" ? (
        <ShowUsersModal />
      ) : (
        ""
      )}
    </>
  );
};

export default CurrentModal;
