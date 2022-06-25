import React from "react";
import Link from "next/link";

const ProfileHeader = ({ username }) => {
  return (
    <header className="d-block d-md-flex align-items-center gap-4 mb-3">
      <p className="m-2 m-md-0 username fs-2 light-font text-muted">
        {username}
      </p>

      <Link href="/edit">
        <button className="btn btn-light border px-3 mt-2">Edit Profile</button>
      </Link>
    </header>
  );
};

export default ProfileHeader;
