import React from "react";

const FormFooter = () => {
  return (
    <article className={`back-img mt-2 text-center p-3 ${style.signUpCard}`}>
      <p className="m-0">
        Don&rsquo;t have an account?{" "}
        <span className="cu-pointer btn-link text-decoration-none">
          Sign up
        </span>
      </p>
    </article>
  );
};

export default FormFooter;
