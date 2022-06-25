import React from "react";

const ProfileHeader = () => {
  return (
    <header className="d-block d-md-flex align-items-center gap-4 mb-3">
      <p className="m-2 m-md-0 username fs-2 light-font text-muted">
        xx_for3on_xx
      </p>

      <button className="btn btn-light border px-3 mt-2">Edit Profile</button>
    </header>
  );
};

export default ProfileHeader;
