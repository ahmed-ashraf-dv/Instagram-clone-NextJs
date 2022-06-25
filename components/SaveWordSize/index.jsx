import React, { useState } from "react";

const SaveWordSize = ({ className, caption, size }) => {
  const [hideCaption, setHideCaption] = useState(true);

  const sizeHandelar = (caption) => {
    if (caption.length < size) return bio;

    return caption.slice(0, size) + "...";
  };

  return (
    <p className={className || ""}>
      {hideCaption ? <>{sizeHandelar(caption)}</> : caption}
      <button
        hidden={!(caption.length >= size)}
        onClick={() => setHideCaption((prev) => !prev)}
        className="btn btn-link text-decoration-none m-0 ms-1 p-0"
      >
        Read {hideCaption ? "more" : "less"}
      </button>
    </p>
  );
};

export default SaveWordSize;
