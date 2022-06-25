/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import FormInput from "../FormInput";
import style from "../../styles/loginForm.module.scss";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAuth from "../../hooks/useAuth";

const schema = yup.object({
  username: yup.string().required("username feld is required"),
  password: yup
    .string()
    .min(8, "min size of password is 8")
    .max(16, "max size of password is 16")
    .required("password feld is required"),
});

const Form = () => {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [error, setError] = useState(null);
  const [isSignLoading, setIsSignLoading] = useState(false);

  const onSubmit = async (dataSign) => {
    setIsSignLoading(true);

    login({
      dataSign,
      onError: (message) => {
        setIsSignLoading(false);
        setError(message);
      },
    });
  };

  return (
    <article className={`${style.form} text-center`}>
      <img src="/instagram.webp" className="mb-3" alt="error" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-center flex-column"
      >
        <FormInput
          register={register("username")}
          value={watch("username")}
          placeholder="Phone number, username"
          type="text"
          id="username"
        />
        <FormInput
          register={register("password")}
          value={watch("password")}
          id="password"
          placeholder="Password"
          type="password"
        />
        <button
          disabled={isSignLoading}
          className={`${style.submitBtn} btn btn-primary`}
        >
          Log In
        </button>
      </form>

      <span className="text-danger">
        {errors[Object.keys(errors)[0]]?.message || error}
      </span>

      <p className={`pt-3 pb-1 m-0 text-muted flex-center ${style.line}`}>OR</p>

      <p className="btn btn-link text-decoration-none small">
        Forgot password?
      </p>
    </article>
  );
};

export default Form;
