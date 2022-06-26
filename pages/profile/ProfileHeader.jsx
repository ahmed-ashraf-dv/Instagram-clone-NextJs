import React, { useState } from "react";
import Link from "next/link";

const ProfileHeader = ({
  username,
  MyProfile,
  isFollowed,
  setIsFollowed,
  isFollowedLoading,
}) => {
  const followToggle = () => {
    setIsFollowed((prev) => !prev);
  };

  return (
    <header className="d-block d-md-flex align-items-center gap-4 mb-3">
      <p className="m-2 m-md-0 username fs-2 light-font text-muted">
        {username}
      </p>

      {!isFollowedLoading ? (
        <button className="btn btn-light border px-3 mt-2">Loading</button>
      ) : MyProfile ? (
        <Link href="/edit">
          <button className="btn btn-light border px-3 mt-2">
            Edit Profile
          </button>
        </Link>
      ) : isFollowed ? (
        <button
          onClick={followToggle}
          className="btn btn-light border px-3 mt-2"
        >
          unfollow
        </button>
      ) : (
        <button
          onClick={followToggle}
          className="btn btn-primary border px-3 mt-2"
        >
          Follow
        </button>
      )}
    </header>
  );
};

export default ProfileHeader;
