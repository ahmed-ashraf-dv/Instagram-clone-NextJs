import React from "react";

const UserStaticts = ({ posts, followers, following }) => {
  return (
    <div className="staticts d-flex justify-content-center justify-content-md-start text-cenetr gap-4 mt-4">
      <p className="posotAmount">
        <span className="fw-bold">{posts}</span> posts
      </p>
      <p className="followingAmount cu-pointer select-none">
        <span className="fw-bold">{followers}</span> Followers
      </p>
      <p className="folowetsAmount cu-pointer select-none">
        <span className="fw-bold">{following}</span> Following
      </p>
    </div>
  );
};

export default UserStaticts;
