/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useCallback } from "react";
import Layout from "../../layout";
import PostThumbnail from "../../components/PostThumbnail";
import InfintyScroll from "../../components/InfintyScroll";
import LoadingSpinner from "../../components/LoadingSpinner";

import style from "../../styles/explore.module.scss";

import axios from "axios";
import request from "../../utils/request";
import Head from "next/head";

const Explore = ({ userData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [initPosts, setInitPosts] = useState([]);

  const getMorePosts = useCallback(async (pageNum) => {
    const posts = axios(`/api/explorePosts?num=${pageNum}&amount=12`).then(
      ({ data }) => {
        const { posts } = data;

        return posts;
      }
    );

    return posts;
  }, []);

  useEffect(() => {
    getMorePosts(1).then((posts) => {
      setInitPosts(posts);
      setIsLoading(true);
    });
  }, [getMorePosts]);

  return (
    <>
      <Head>
        <title>explore</title>
      </Head>

      <Layout
        username={userData.username}
        avatar={userData?.avatar}
        className={`container ${style.maxWidth_container} p-4`}
      >
        {isLoading ? (
          <InfintyScroll
            className={`row ${style.imgRow}`}
            initData={initPosts}
            loading={<LoadingSpinner />}
            getNextPage={getMorePosts}
            Component={PostThumbnail}
            pageProps={{ cuurentUsername: userData.username }}
            IsEndComponent={
              <p className="text-muted d-block w-fit mx-auto">
                Posts finished 🐱‍🏍
              </p>
            }
          />
        ) : (
          <LoadingSpinner />
        )}
      </Layout>
    </>
  );
};

export default Explore;

export const getServerSideProps = async ({ req }) => {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const { data } = await request.post(`/user-data-with-token?token=${token}`);

  if (data.code != 200) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { userData: data.user } };
};
