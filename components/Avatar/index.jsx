/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import dataURLtoBlob from "../../utils/dataURLtoBlob";

const Avatar = ({
  src,
  width: size = 30,
  onClick = null,
  className = "",
  noServer,
}) => {
  const [img, setImg] = useState(null);

  useEffect(() => setImg(dataURLtoBlob(src)), [src]);

  return (
    <img
      src={
        src?.startsWith("/default_avatar") || noServer
          ? src
          : img
          ? URL.createObjectURL(img)
          : "/default_avatar.webp"
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
