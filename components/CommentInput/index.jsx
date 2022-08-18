import React, { useEffect, useRef, useState } from "react";
import style from "../../styles/modal.module.scss";

const CommentInput = ({ focus, setFocus }) => {
  const [comment, setComment] = useState("");
  const input = useRef();

  // Foucs To Input
  useEffect(() => {
    if (focus) {
      input.current.focus();
      setFocus(false);
    }
  }, [focus, setFocus]);

  return (
    <div className={`${style.inputNewComment} border`}>
      <div className="flex-center">
        <button
          disabled={!comment}
          className="btn btn-link text-decoration-none"
        >
          Send
        </button>
        <input
          ref={input}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="text-end w-100 border-0"
          type="text"
          placeholder="add a comment..."
        />
        <div className="icons cu-pointer p-2">
          <svg
            aria-label="emoji"
            className="_ab6-"
            color="#262626"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
