/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import dataURLtoBlob from "../../utils/dataURLtoBlob";

const server = process.env.NEXT_PUBLIC_API_LINK;
const default_avatar = "/default_avatar.webp";

const Avatar = ({
  src,
  width: size = 30,
  onClick = null,
  className = "",
  noServer,
}) => {
  const [img, setImg] = useState(default_avatar);

  useEffect(() => setImg(src), [src]);

  return (
    <img
      src={
        src?.startsWith("/default_avatar") || noServer
          ? src
          : src?.startsWith("/imgs/defaultAvatars")
          ? server + src
          : img !== default_avatar
          ? URL.createObjectURL(dataURLtoBlob(img))
          : default_avatar
      }
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
