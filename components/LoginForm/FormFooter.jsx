import React from "react";
import Link from "next/link";

import style from "../../styles/loginForm.module.scss";

const FormFooter = () => {
  return (
    <article className={`back-img mt-2 text-center p-3 ${style.signUpCard}`}>
      <p className="m-0">
        Don&rsquo;t have an account?{" "}
        <Link href="/signup">
          <span className="cu-pointer btn-link text-decoration-none">
            Sign up
          </span>
        </Link>
      </p>
    </article>
  );
};

export default FormFooter;
