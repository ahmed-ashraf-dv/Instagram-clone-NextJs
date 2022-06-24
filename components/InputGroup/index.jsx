import React from "react";

const InputGroup = ({ children, alignStart = false }) => {
  return (
    <div
      className={`${
        alignStart ? "" : "flex-center"
      } mb-3  flex-wrap flex-md-nowrap`}
    >
      {children}
    </div>
  );
};

export default InputGroup;
