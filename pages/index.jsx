import React, { useState, useEffect, useCallback } from "react";
import useAuth from "../hooks/useAuth";

import Avatar from "../components/Avatar";
import Post from "../components/Post";
import Layout from "../layout";
import LoginForm from "../components/LoginForm";
import LoadingSpinner from "../components/LoadingSpinner";
import InfintyScroll from "../components/InfintyScroll";

import style from "../styles/homePage.module.scss";
import { useRouter } from "next/router";

import request from "../utils/request";
import axios from "axios";
import dataURLtoBlob from "../utils/dataURLtoBlob";

import Head from "next/head";

const Home = ({ userData, isLogin }) => {
  const { logout } = useAuth();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [initPosts, setInitPosts] = useState([]);

  const getMorePosts = useCallback(async (pageNum) => {
    const posts = axios(`/api/getPosts?num=${pageNum}&amount=5`).then(
      ({ data }) => {
        let { posts } = data;

        if (posts?.length) {
          posts = posts.map((post) => ({
            ...post,
            img: URL.createObjectURL(dataURLtoBlob(post.img)),
          }));
        }

        return posts;
      }
    );

    return posts;
  }, []);

  useEffect(() => {
    getMorePosts(1).then((posts) => {
      const orderByDate = (array) =>
        array.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });

      setInitPosts(orderByDate(posts));

      setIsLoading(true);
    });
  }, [getMorePosts]);

  const toProfile = () => router.push(`/profile/${userData.username}`);

  return (
    <>
      {isLogin ? (
        <>
          <Head>
            <title>Home</title>
          </Head>

          <Layout
            username={userData.username}
            avatar={userData?.avatar}
            className={`${style.homePage} container-fluid pt-4 ps-md-4 `}
          >
            <div className={`${style.postContainer} mx-auto mx-md-0`}>
              {isLoading ? (
                <InfintyScroll
                  initData={initPosts}
                  loading={<LoadingSpinner />}
                  getNextPage={getMorePosts}
                  Component={Post}
                  pageProps={{
                    clientUsername: userData.username,
                    isVerified: userData.isVerified,
                  }}
                  IsEndComponent={
                    <p className="text-muted d-block w-fit mx-auto">
                      Posts finished 🐱‍🏍
                    </p>
                  }
                />
              ) : (
                <LoadingSpinner />
              )}
            </div>

            <aside className={`${style.stickySide} d-none d-md-block`}>
              <div className="data flex-center">
                <Avatar
                  className="cu-pointer"
                  width={50}
                  src={userData?.avatar}
                  onClick={toProfile}
                />

                <div className="details ms-3">
                  <div className="user-data user-data d-flex align-items-center">
                    <p
                      onClick={toProfile}
                      className="m-0 p-0 select-none username cu-pointer text-muted"
                    >
                      {userData.username}
                    </p>

                    {userData.isVerified && (
                      <span
                        style={{ transform: "scale(.8)" }}
                        className="verified ms-1 mt-1"
                      />
                    )}
                  </div>

                  <p
                    onClick={logout}
                    className="m-0 p-0 logounBtn btn btn-link text-decoration-none"
                  >
                    logout
                  </p>
                </div>
              </div>
            </aside>
          </Layout>
        </>
      ) : (
        <>
          <Head>
            <title>Login to continue</title>
          </Head>

          <LoginForm isPage={false} />
        </>
      )}
    </>
  );
};

export default Home;

export const getServerSideProps = async ({ req }) => {
  const { token } = req.cookies;

  if (!token) {
    return {
      props: {
        isLogin: false,
      },
    };
  }

  const { data } = await request.post(`/user-data-with-token?token=${token}`);

  if (data.code != 200) {
    return {
      props: {
        isLogin: false,
      },
    };
  }

  return {
    props: {
      userData: data.user,
      isLogin: true,
    },
  };
};
