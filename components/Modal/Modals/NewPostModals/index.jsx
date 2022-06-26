/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import style from "../../../../styles/modal.module.scss";
import Step1 from "./Step1";
import Step2 from "./Step2";

import useCookie from "../../../../hooks/useCookie";

import axios from "axios";

import { useDispatch } from "react-redux";
import { closeModal } from "../../../../store/ModalSlice";
import { useRouter } from "next/router";

const NewPostModal = () => {
  const [img, setImage] = useState(null);
  const [imgBase64, setImgBase64] = useState(null);
  const [step, setStep] = useState(1);

  const [isReuest, setIsReuest] = useState(false);

  const cookie = useCookie();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!img) return;

    const reader = new FileReader();

    reader.onloadend = () => setImgBase64(reader.result);

    reader.readAsDataURL(img);
  }, [img]);

  const nextStep = () => {
    setStep(2);
  };

  // Hook Form
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    data.img = imgBase64;
    data.token = cookie.get("token");

    setIsReuest(true);

    const { data: response } = await axios("/api/newpost", {
      method: "POST",
      data,
    });

    if (response.code === 200) {
      dispatch(closeModal());
      return router.push("/");
    }

    setIsReuest(false);
    return alert(response?.message);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.newPostContain}>
      {/* Modal Header */}
      <div className={style.header + " flex-around"}>
        <span>
          {" "}
          <button
            hidden={step === 1}
            disabled={isReuest}
            className="btn btn-link p-0 text-decoration-none"
          >
            Share
          </button>
        </span>

        <p className="m-0">Create a new post</p>

        {/* // Next */}
        <div
          disabled={!imgBase64}
          onClick={nextStep}
          className="nextArrow cu-pointer"
        >
          <svg
            aria-label="back"
            className="_ab6-"
            color="#262626"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="2.909"
              x2="22.001"
              y1="12.004"
              y2="12.004"
            ></line>
            <polyline
              fill="none"
              points="9.276 4.726 2.001 12.004 9.276 19.274"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></polyline>
          </svg>
        </div>
      </div>

      {/* Modal Conatin */}
      <div className={`${style.contain} flex-center flex-column`}>
        <Step1 imgBase64={imgBase64} setImage={setImage} step={step} />
        <Step2 register={{ ...register("caption") }} step={step} />
      </div>
    </form>
  );
};

export default NewPostModal;
