/* eslint-disable @next/next/no-img-element */
import React from "react";
import Carosal from "../Carosal";

const PhoneCarosal = () => {
  return (
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
  );
};

export default PhoneCarosal;
