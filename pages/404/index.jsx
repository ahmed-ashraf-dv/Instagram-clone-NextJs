/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Layout from "../../layout";

import Link from "next/link";

const ErrorPage = () => {
  return (
    <Layout username="" avatar="/default_avatar.webp">
      <div className="redirect text-center pt-5">
        <p>Sorry, this page is not available.</p>
        <p>
          The link you followed may be broken, or the page may have been
          removed.{" "}
          <Link href="/">
            <span className="text-primary cu-pointer">Back to Instagram.</span>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default ErrorPage;
