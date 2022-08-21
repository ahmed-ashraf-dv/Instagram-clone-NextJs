/* eslint-disable @next/next/no-img-element */
import React from "react";

const server = process.env.NEXT_PUBLIC_API_LINK;

const Avatar = ({
  src,
  width: size = 30,
  onClick = null,
  className = "",
  noServer,
}) => {
  return (
    <img
      src={src.startsWith("/default_avatar") || noServer ? src : server + src}
      onClick={onClick}
      className={`rounded-circle ${className}`}
      width={size}
      height={size}
      alt="Avatar"
      draggable={false} 
      style={{ userSelect: "none" }}
    />
  );
};

export default Avatar;
