import React, { useState } from "react";
import style from "../../styles/loginForm.module.scss";

const FormInput = ({ id, type, placeholder }) => {
  const [value, setValue] = useState();
  const [isHidden, seIsHidden] = useState(true);

  return (
    <article className={`${style.formInput} ${value ? style.typingState : ""}`}>
      <label htmlFor={id}>{placeholder}</label>
      {type === "password" && (
        <div className={`${style.inputGroub}`}>
          <input
            onChange={(e) => setValue(e.target.value)}
            id={id}
            type={isHidden ? "password" : "text"}
          />
          <button
            onClick={() => seIsHidden((prev) => !prev)}
            type="button"
            className="btn btn-link text-decoration-none"
          >
            {isHidden ? "show" : "hide"}
          </button>
        </div>
      )}

      {type !== "password" && (
        <input onChange={(e) => setValue(e.target.value)} id={id} type={type} />
      )}
    </article>
  );
};

export default FormInput;
