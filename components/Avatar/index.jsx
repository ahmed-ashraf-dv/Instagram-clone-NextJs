/* eslint-disable @next/next/no-img-element */
import React from "react";

const Avatar = ({ src, width = 30, onClick = null }) => {
  return (
    <img
      src={src}
      onClick={onClick}
      className="rounded-circle"
      width={width}
      alt="Avatar"
    />
  );
};

export default Avatar;
