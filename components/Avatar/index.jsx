/* eslint-disable @next/next/no-img-element */
import React from "react";

const Avatar = ({ src, width = 30 }) => {
  return (
    <img src={src} className="rounded-circle" width={width} alt="Avatar" />
  );
};

export default Avatar;
