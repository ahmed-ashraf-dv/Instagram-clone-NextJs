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
          <article className={`${style.form} text-center`}>
            <img src="/instagram.webp" className="mb-3" alt="error" />
            <form className="flex-center flex-column">
              <FormInput
                placeholder="Mobile Number or Email"
                type="email"
                id="email"
              />
              <FormInput placeholder="Full Name" type="text" id="name" />
              <FormInput placeholder="username" type="text" id="username" />
              <FormInput id="password" placeholder="Password" type="password" />

              <div
                className={`${style.policyDetails} mt-3 text-muted text-center`}
              >
                <p>
                  People who use our service may have uploaded your contact
                  information to Instagram. <strong>Learn More</strong>
                </p>
                <p>
                  By signing up, you agree to our <strong>Terms</strong> ,
                  <strong> Data Policy </strong> and{" "}
                  <strong>Cookies Policy .</strong>
                </p>
              </div>
              <button className={`${style.submitBtn} btn btn-primary`}>
                Sign Up
              </button>
            </form>
          </article>

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
