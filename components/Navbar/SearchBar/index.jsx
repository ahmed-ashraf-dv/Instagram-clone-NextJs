import React, { useRef, useState } from "react";
import { useEffect } from "react";
import style from "../../../styles/navbar.module.scss";
import ResultContainer from "./ResultContainer";

const SearchBar = () => {
  const searchQuery = useRef();
  const [queryFocus, setQueryFocus] = useState(false);
  const [query, setQuery] = useState("");
  const [cancelBtnState, setCancelBtnState] = useState(false);
  const [isShowResultConatiner, setIsShowResultConatiner] = useState(false);

  const onBlurHandelar = () => {
    setQueryFocus(false);

    // Stay Few to blur input first
    setTimeout(() => setCancelBtnState(false), 100);
  };

  const onFoucsHandelar = () => {
    setQueryFocus(true);
    setCancelBtnState(true);
    setIsShowResultConatiner(true);
  };

  const onChangeHandelar = (e) => {
    setQuery(e.target.value);
  };

  const emptyQuery = () => {
    setQuery("");
    setCancelBtnState(false);

    searchQuery.current.blur();
  };

  // hide ResultContainer after blur
  useEffect(() => {
    if (queryFocus) return;

    setTimeout(() => setIsShowResultConatiner(false), 200);
  }, [queryFocus]);

  return (
    <div className={`${style.searchBar} d-none d-md-block position-relative`}>
      <label
        htmlFor="query"
        hidden={query}
        className={`h-100 text-muted gap-2 flex-center ${style.searchIcon}`}
      >
        <svg
          hidden={queryFocus}
          aria-label="Search"
          className="_8-yf5 "
          color="#8e8e8e"
          fill="#8e8e8e"
          height="16"
          role="img"
          viewBox="0 0 24 24"
          width="16"
        >
          <path
            d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="16.511"
            x2="22"
            y1="16.511"
            y2="22"
          ></line>
        </svg>
        <p>Search</p>
      </label>
      <input
        ref={searchQuery}
        onBlur={onBlurHandelar}
        onFocus={onFoucsHandelar}
        onChange={onChangeHandelar}
        value={query}
        id="query"
        type="text"
        autoComplete="off"
      />
      <div
        hidden={(!cancelBtnState && !query) ?? false}
        onClick={emptyQuery}
        className={`${style.emptyQuery} flex-center`}
      >
        <span>X</span>
      </div>

      {query && isShowResultConatiner && <ResultContainer query={query} />}
    </div>
  );
};

export default SearchBar;
