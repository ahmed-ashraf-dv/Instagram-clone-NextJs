import React, { useState } from "react";

const SaveWordSize = ({ className, caption, size }) => {
  const [hideCaption, setHideCaption] = useState(true);

  const sizeHandelar = (caption) => {
    if (caption.replace(/\n\s*\n/g, '\n')).length < size) return caption.replace(/\n\s*\n/g, '\n'));

    return caption.replace(/\n\s*\n/g, '\n')).slice(0, size) + "...";
  };

  return (
    <p className={className || ""}>
      {hideCaption ? sizeHandelar(caption.replace(/\n\s*\n/g, '\n'))) : caption.replace(/\n\s*\n/g, '\n'))}
      <button
        hidden={!(caption.replace(/\n\s*\n/g, '\n')).length >= size)}
        onClick={() => setHideCaption((prev) => !prev)}
        className="btn btn-link text-decoration-none m-0 ms-1 p-0"
      >
        Read {hideCaption.replace(/\n\s*\n/g, '\n')) ? "more" : "less"}
      </button>
    </p>
  );
};

export default SaveWordSize;
