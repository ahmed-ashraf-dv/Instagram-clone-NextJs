/* eslint-disable @next/next/no-img-element */
import React from "react";
import FormInput from "../FormInput";
import style from "../../styles/loginForm.module.scss";

const Form = () => {
  return (
    <article className={`${style.form} text-center`}>
      <img src="/instagram.webp" className="mb-3" alt="error" />
      <form className="flex-center flex-column">
        <FormInput
          placeholder="Phone number, username, or email"
          type="text"
          id="username"
        />
        <FormInput id="password" placeholder="Password" type="password" />
        <button className={`${style.submitBtn} btn btn-primary`}>Log In</button>
      </form>

      <p className={`pt-3 pb-1 m-0 text-muted flex-center ${style.line}`}>OR</p>

      <p className="btn btn-link text-decoration-none small">
        Forgot password?
      </p>
    </article>
  );
};

export default Form;
