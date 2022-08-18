import React from "react";

import InstgramIcon from "./InstgramIcon";
import MetaIcon from "./MetaIcon";

const LoadingPage = () => {
  return (
    <article className="bg-light postion-fixed w-100 vh-100">
      <InstgramIcon />

      <MetaIcon />
    </article>
  );
};

export default LoadingPage;
