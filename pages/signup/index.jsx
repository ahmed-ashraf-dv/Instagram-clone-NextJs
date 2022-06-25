/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../../styles/loginForm.module.scss";
import Fotter from "../../components/Footer";
import SignForm from "./SignForm";

import axios from "axios";

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

export const getServerSideProps = async ({ req }) => {
  const { token } = req.cookies;

  if (!token) {
    return {
      props: {},
    };
  }

  const { data } = await axios(`http://localhost:3005/users?token=${token}`);

  if (!data.length) {
    return {
      props: {},
    };
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};
