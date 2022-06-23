/* eslint-disable @next/next/no-img-element */
import React from "react";

const Avatar = ({ src }) => {
  return <img src={src} className="rounded-circle" width={30} alt="Avatar" />;
};

export default Avatar;
