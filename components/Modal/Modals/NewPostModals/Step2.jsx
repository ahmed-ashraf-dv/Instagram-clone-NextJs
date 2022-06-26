/* eslint-disable @next/next/no-img-element */
import React from "react";

import style from "../../../../styles/modal.module.scss";

import Avatar from "../../../Avatar";
import { useSelector } from "react-redux";

const Step2 = ({ step, register }) => {
  const { currentData } = useSelector(({ ModalSlice }) => ModalSlice);

  return (
    <div
      className={`${style.step}  ${
        step === 2 ? style.active : step > 2 ? style.compleate : ""
      } step2 w-100 h-100 p-3`}
    >
      <header>
        <div className="details mb-3 w-fit d-flex align-items-center me-auto gap-3">
          <Avatar src={currentData?.avatar} />
          <p className={`${style.username} fw-bold`}>{currentData?.username}</p>
        </div>
      </header>
      <main>
        <textarea
          {...register}
          id="caption"
          className="w-100 border p-2"
          style={{ resize: "none" }}
          placeholder="Write captionn..."
        />
      </main>
    </div>
  );
};

export default Step2;
