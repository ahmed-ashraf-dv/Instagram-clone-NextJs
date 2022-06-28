import React, { useCallback, useEffect, useState } from "react";
import style from "../../../../styles/navbar.module.scss";

import Result from "./Result";

import LoadingSpinner from "../../../LoadingSpinner";
import InfintyScroll from "../../../InfintyScroll";

import axios from "axios";

const ResultContainer = ({ query }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  const getMoreResults = useCallback(
    async (num) => {
      const { data: usersData } = await axios(
        `/api/searchUsers?num=${num}&amount=5&query=${query}`
      );

      return usersData?.users || [];
    },
    [query]
  );

  useEffect(() => {
    getMoreResults(1).then((users) => {
      if (!users?.length) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }

      setResult(users);
      setIsLoading(true);
    });
  }, [getMoreResults]);

  return (
    <div className={`position-absolute ${style.resultContainer} border`}>
      {isNotFound ? (
        <div className="flex-center h-100">
          <p className="text-muted">No results were found.</p>
        </div>
      ) : isLoading ? (
        <InfintyScroll
          initData={result}
          className="w-100 h-100"
          getNextPage={getMoreResults}
          Component={Result}
          loading={
            <div className="flex-center h-100">
              <p className="text-muted">No results were found.</p>
            </div>
          }
        />
      ) : (
        <div className="flex-center h-100">
          <LoadingSpinner />
        </div>
      )}
      {}
    </div>
  );
};

export default ResultContainer;
