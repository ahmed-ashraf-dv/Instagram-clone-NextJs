import React, { useEffect, useRef, useState } from "react";

const InfintyScroll = ({ initData, loading, getNextPage, Component }) => {
  const elment = useRef();

  const [pageNum, setPageNum] = useState(1);
  const [data, setData] = useState(initData);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    if (isLoaded) return;

    const pageniationHandelar = async () => {
      const data = await getNextPage(pageNum);

      setData((prev) => {
        if (Array.isArray(prev)) return [...prev, ...data];

        return { ...prev, ...data };
      });

      setIsLoaded(true);
    };

    pageniationHandelar();
  }, [pageNum, isLoaded, getNextPage]);

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      const elmentHeight = elment.current.scrollHeight;
      const currentScroll = window.scrollY + window.innerHeight;

      const persent = (currentScroll * 100) / elmentHeight; // (%)

      // 80%
      if (persent >= 80 && isLoaded) {
        setIsLoaded(false);
        setPageNum((prev) => prev + 1);
      }
    };
  }

  return (
    <main ref={elment} className="infinty-scroll-elment">
      {data?.map((currentData, idx) => (
        <Component key={idx} data={currentData} />
      ))}

      {loading}
    </main>
  );
};

export default InfintyScroll;
