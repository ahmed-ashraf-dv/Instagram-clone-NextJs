/* eslint-disable @next/next/no-img-element */
import React from "react";

const InstgramIcon = () => {
  return (
    <img
      width="60px"
      height="60px"
      className="postion-center"
      alt=""
      src="data:image/png;base64,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"
    />
  );
};

export default InstgramIcon;
