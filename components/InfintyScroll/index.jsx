/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";

const InfintyScroll = ({
  initData,
  loading,
  getNextPage,
  Component,
  IsEndComponent,
  className = "",
  pageProps = {},
}) => {
  const elment = useRef(null);

  const [pageNum, setPageNum] = useState(1);
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState(true);
  const [isEndData, setIsEndData] = useState(false);

  const [startScroll, setStartScroll] = useState(false);

  useEffect(() => {
    if (!elment.current?.clientHeight) return;

    window.onscroll = () => {
      setStartScroll(true);

      const elmentHeight = elment.current?.clientHeight;
      const currentScroll = window.scrollY + window.innerHeight;

      const persent = (currentScroll * 100) / elmentHeight; // (%)

      // 80%
      if (persent >= 80 && isLoaded && elmentHeight && currentScroll) {
        setIsLoaded(false);
        setPageNum((prev) => prev + 1);
      }
    };
  });

  useEffect(() => {
    setData(initData);
  }, [initData]);

  useEffect(() => {
    if (isLoaded || isEndData) return;

    const pageniationHandelar = async () => {
      const data = await getNextPage(pageNum);

      if (!data?.length) return setIsEndData(true);

      setData((prev) => {
        if (Array.isArray(prev)) return [...prev, ...data];

        return { ...prev, ...data };
      });

      setIsLoaded(true);
    };

    pageniationHandelar();
  }, [pageNum, isLoaded, getNextPage, isEndData]);

  return (
    <main ref={elment} className={`infinty-scroll-elment ${className}`}>
      {data?.map((currentData, idx) => (
        <Component {...pageProps} key={idx} data={currentData} />
      ))}

      {/* Loading Spinner */}
      {!isEndData && initData?.length && startScroll ? (
        <div className="loading-spinner">{loading}</div>
      ) : (
        <></>
      )}

      {/* End Page  */}
      {IsEndComponent && isEndData && (
        <div className="end-component">{IsEndComponent}</div>
      )}
    </main>
  );
};

export default InfintyScroll;
