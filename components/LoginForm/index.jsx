/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../../styles/loginForm.module.scss";
import PhoneCarosal from "./PhoneCarosal";
import Footer from "../Footer";
import Form from "./Form";
import FormFooter from "./FormFooter";

const LoginForm = ({ isPage }) => {
  return (
    <>
      <section
        className={`${style.loginForm} ${
          !isPage ? "flex-row-reverse" : ""
        } flex-center container`}
      >
        <div className={`${style.column}`}>
          <Form />
          <FormFooter />
        </div>

        {!isPage && <PhoneCarosal />}
      </section>

      <Footer />
    </>
  );
};

export default LoginForm;
