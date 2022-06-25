/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../../styles/loginForm.module.scss";
import FormInput from "../../components/FormInput";
import Fotter from "../../components/Footer";

const SignForm = () => {
  return (
    <>
      <section className={`${style.loginForm}  flex-center container`}>
        <div className={`${style.column}`}>
          <SignForm />

          <article
            className={`back-img mt-2 text-center p-3 ${style.signUpCard}`}
          >
            <p className="m-0">
              Have an account?{" "}
              <span className="cu-pointer btn-link text-decoration-none">
                Log in
              </span>
            </p>
          </article>
        </div>
      </section>
      <Fotter />
    </>
  );
};

export default SignForm;
