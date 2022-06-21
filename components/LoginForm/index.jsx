/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../../styles/loginForm.module.scss";
import Carosal from "../Carosal";
import Footer from "../footer";
import FormInput from "../FormInput";

const LoginForm = ({ isPage }) => {
  return (
    <>
      <section
        className={`${style.loginForm} ${
          !isPage ? "flex-row-reverse" : ""
        } flex-center container`}
      >
        <div className={`${style.column}`}>
          <article className={`${style.form} text-center`}>
            <img src="/instagram.webp" className="mb-3" alt="error" />
            <form className="flex-center flex-column">
              <FormInput
                placeholder="Phone number, username, or email"
                type="text"
                id="username"
              />
              <FormInput id="password" placeholder="Password" type="password" />
              <button className={`${style.submitBtn} btn btn-primary`}>
                Log In
              </button>
            </form>

            <p className={`pt-3 pb-1 m-0 text-muted flex-center ${style.line}`}>
              OR
            </p>

            <p className="btn btn-link text-decoration-none small">
              Forgot password?
            </p>
          </article>

          <article
            className={`back-img mt-2 text-center p-3 ${style.signUpCard}`}
          >
            <p className="m-0">
              Don&rsquo;t have an account?{" "}
              <span className="cu-pointer btn-link text-decoration-none">
                Sign up
              </span>
            </p>
          </article>
        </div>

        {!isPage && (
          <article className={`${style.carosalContainer} d-none d-md-block`}>
            <article className="phone">
              <img src="/carosalPhone/phone.webp" alt="" />

              <div className={`${style.carosalImgs}`}>
                <Carosal transition={2} delay={3}>
                  <img src="/carosalPhone/01.webp" alt="" />
                  <img src="/carosalPhone/02.webp" alt="" />
                  <img src="/carosalPhone/03.webp" alt="" />
                  <img src="/carosalPhone/04.webp" alt="" />
                </Carosal>
              </div>
            </article>
          </article>
        )}
      </section>

      <Footer />
    </>
  );
};

export default LoginForm;
