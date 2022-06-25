/* eslint-disable @next/next/no-img-element */
import React from "react";

const Avatar = ({ src, width: size = 30, onClick = null, className = "" }) => {
  return (
    <img
      src={src}
      onClick={onClick}
      className={`rounded-circle ${className}`}
      width={size}
      height={size}
      alt="Avatar"
    />
  );
};

export default Avatar;
