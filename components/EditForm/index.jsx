import React, { useEffect, useState } from "react";
import InputGroup from "../InputGroup";
import Avatar from "../Avatar";
import style from "../../styles/accountEdit.module.scss";

import { useForm } from "react-hook-form";
import useCookie from "../../hooks/useCookie";
import { useRouter } from "next/router";

import axios from "axios";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import request from "../../utils/request";

const schema = yup.object({
  name: yup
    .string()
    .required("name feld is required")
    .min(3, "The name must be greater than 3 characters")
    .max(20, "The name must be less than 20 characters"),
  username: yup
    .string()
    .required("username feld is required")
    .min(3, "username must be greater than 3 characters")
    .max(20, "The username must be less than 20 characters"),
  bio: yup
    .string()
    .required("bio feld is required")
    .min(3, "bio must be greater than 5 characters")
    .max(500, "The bio must be less than 200 characters"),
});

const EditForm = ({ userData }) => {
  const [initData, setInitData] = useState(null);
  const [isChangeing, setIschangeing] = useState(true);

  const [requestLoaded, setRequestLoaded] = useState(true);
  const [imgBase64, setImgBase64] = useState(null);

  const [error, setError] = useState(null);

  const cookie = useCookie();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: userData.name,
      username: userData.username,
      avatar: 0,
      bio: userData.bio || "No Bio",
    },
    resolver: yupResolver(schema),
  });

  const data = watch();

  // set Default values
  useEffect(() => {
    setInitData({
      name: userData.name,
      username: userData.username,
      avatar: 0,
      bio: userData.bio || "No Bio",
    });
  }, [userData]);

  useEffect(() => {
    // check if not default
    if (JSON.stringify(data) !== JSON.stringify(initData) && initData) {
      return setIschangeing(true);
    }

    setIschangeing(false);
  }, [data, initData]);

  // Add Img
  useEffect(() => {
    if (!data.avatar[0]) return;

    const reader = new FileReader();

    reader.onloadend = () => setImgBase64(reader.result);

    reader.readAsDataURL(data.avatar[0]);
  }, [data]);

  // Submit Edit
  const onSubmit = async (cuurentData) => {
    // Get chaned values
    const changeingKeys = Object.keys(cuurentData).filter(
      (key) => initData[key] !== cuurentData[key]
    );

    // Empty Data
    const requestData = {};
    const token = cookie.get("token");

    // Add data to object
    changeingKeys.forEach((key) => {
      requestData[key] = cuurentData[key];
    });

    // For Handel Image
    if (changeingKeys.includes("avatar")) {
      requestData.avatar = requestData.avatar[0];
    }

    try {
      // create form data
      const formData = new FormData();
      Object.keys(requestData).forEach((key) =>
        formData.append(key, requestData[key])
      );
      formData.append("token", token);

      setRequestLoaded(false);
      const { data } = await request.post(`/update`, formData);

      if (data.code === 200) {
        return router.push(`/`);
      }

      setRequestLoaded(true);
      setError(data.message || data.msg);
    } catch (err) {
      setRequestLoaded(true);
      setError(err.message);
    }
  };

  return (
    <article className={`${style.edits} p-4 p-x-0 mx-auto`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup alignStart>
          <div className="flex-start align-items-center gap-3">
            <label htmlFor="avatar" className={`cu-pointer ${style.avatar}`}>
              <Avatar
                noServer={imgBase64}
                width={50}
                src={imgBase64 || userData.avatar}
              />
            </label>

            <div className="data">
              <p className="m-0 username fw-200 text-muted">
                {userData.username}
              </p>
              <label htmlFor="avatar" className={`cu-pointer ${style.avatar}`}>
                <p className="btn m-0 btn-link p-0 text-decoration-none">
                  Change Profile Photo
                </p>
              </label>
            </div>
          </div>
          <input
            accept="image/*"
            {...register("avatar")}
            hidden
            id="avatar"
            type="file"
          />
        </InputGroup>

        <InputGroup>
          <label className="text-center text-md-start" htmlFor="name">
            Name
          </label>
          <input {...register("name")} id="name" type="text" />
        </InputGroup>

        <p className="small text-muted text-center">
          Help people discover your account by using the name you&lsquo;re known
          by: either your full name, nickname, or business name. You can only
          change your name twice within 14 days.
        </p>

        <InputGroup>
          <label className="text-center text-md-start" htmlFor="username">
            Username
          </label>
          <input {...register("username")} id="username" type="text" />
        </InputGroup>

        <p className="small text-muted text-center">
          In most cases, you&lsquo;ll be able to change your username back to
          {userData.username} for another 14 days.
        </p>

        <InputGroup>
          <label className="text-center text-md-start" htmlFor="website">
            Website
          </label>
          <input id="website" type="text" />
        </InputGroup>

        <InputGroup>
          <label className="text-center text-md-start" htmlFor="bio">
            Bio
          </label>
          <textarea {...register("bio")} id="bio" type="text" />
        </InputGroup>

        <InputGroup>
          <label className="text-center text-md-start" htmlFor="email">
            Email
          </label>
          <input id="email" type="text" />
        </InputGroup>

        <button
          disabled={!isChangeing || !requestLoaded}
          className="btn btn-primary small fw-bold m-auto m-md-0 d-block"
        >
          Submit
        </button>
        <span className="text-danger text-center d-block mt-3">
          {errors[Object.keys(errors)[0]]?.message || error}
        </span>
      </form>
    </article>
  );
};

export default EditForm;
