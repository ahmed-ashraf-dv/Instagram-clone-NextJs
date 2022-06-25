/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import FormInput from "../../components/FormInput";
import style from "../../styles/loginForm.module.scss";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAuth from "../../hooks/useAuth";

const schema = yup.object({
  email: yup.string().required("email feld is required"),
  name: yup.string().required("name feld is required"),
  username: yup.string().required("username feld is required"),
  password: yup
    .string()
    .min(8, "min size of password is 8")
    .max(16, "max size of password is 16")
    .required("password feld is required"),
});

const SignForm = () => {
  const { signUp } = useAuth();

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

    signUp({
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
          register={register("email")}
          value={watch("email")}
          placeholder="Email"
          type="email"
          id="email"
        />
        <FormInput
          register={register("name")}
          value={watch("name")}
          placeholder="Full Name"
          type="text"
          id="name"
        />
        <FormInput
          register={register("username")}
          value={watch("username")}
          placeholder="username"
          type="text"
          id="username"
        />
        <FormInput
          register={register("password")}
          value={watch("password")}
          placeholder="Password"
          type="password"
          id="password"
        />

        <div className={`${style.policyDetails} mt-3 text-muted text-center`}>
          <p>
            People who use our service may have uploaded your contact
            information to Instagram. <strong>Learn More</strong>
          </p>
          <p>
            By signing up, you agree to our <strong>Terms</strong> ,
            <strong> Data Policy </strong> and <strong>Cookies Policy .</strong>
          </p>
        </div>
        {/* // First Error */}
        <span className="text-danger">
          {errors[Object.keys(errors)[0]]?.message || error}
        </span>
        <button
          disabled={isSignLoading}
          className={`${style.submitBtn} btn btn-primary`}
        >
          Sign Up
        </button>
      </form>
    </article>
  );
};

export default SignForm;
