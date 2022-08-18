import React from "react";

import { useDispatch } from "react-redux";
import { openModal } from "../../store/ModalSlice";

const UserStaticts = ({ posts, followers, following, username }) => {
  const dispatch = useDispatch();

  const openUsersModal = (type) => {
    const payload = {
      type,
      cuurentUsername: username,
    };

    dispatch(openModal(payload));
  };

  return (
    <div className="staticts d-flex justify-content-center justify-content-md-start text-cenetr gap-4 mt-4">
      <p className="posotAmount">
        <span className="fw-bold">{posts}</span> posts
      </p>
      <p
        onClick={() => openUsersModal("Followers")}
        className="followingAmount cu-pointer select-none"
      >
        <span className="fw-bold">{followers}</span> Followers
      </p>
      <p
        onClick={() => openUsersModal("Following")}
        className="folowetsAmount cu-pointer select-none"
      >
        <span className="fw-bold">{following}</span> Following
      </p>
    </div>
  );
};

export default UserStaticts;
