/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../../styles/loginForm.module.scss";
import Fotter from "../../components/Footer";
import SignForm from "./SignForm";

import Link from "next/link";

const Sign = () => {
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
              <Link href="/login">
                <span className="cu-pointer btn-link text-decoration-none">
                  Log in
                </span>
              </Link>
            </p>
          </article>
        </div>
      </section>
      <Fotter />
    </>
  );
};

export default Sign;
