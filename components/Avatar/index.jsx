/* eslint-disable @next/next/no-img-element */
import React from "react";

const server = process.env.NEXT_PUBLIC_API_LINK;

const Avatar = ({ src, width: size = 30, onClick = null, className = "" }) => {
  return (
    <img
      src={src === "/default_avatar.webp" ? src : server + src}
      onClick={onClick}
      className={`rounded-circle ${className}`}
      width={size}
      height={size}
      alt="Avatar"
    />
  );
};

export default Avatar;
