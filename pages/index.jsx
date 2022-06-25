import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import useAuth from "../hooks/useAuth";

import Avatar from "../components/Avatar";
import Post from "../components/Post";
import Layout from "../layout";
import LoginForm from "../components/LoginForm";
import InfintyScroll from "../components/InfintyScroll";
import Link from "next/link";

import style from "../styles/homePage.module.scss";

const Home = ({ userData, isLogin }) => {
  const { logout } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [initPosts, setInitPosts] = useState([]);

  const getMorePosts = useCallback(async (pageNum) => {
    const { data } = axios(`/api/getPosts?num=${pageNum}&amount=10`).then(
      ({ data }) => {
        const { posts } = data;

        return posts;
      }
    );

    return data;
  }, []);

  useEffect(() => {
    getMorePosts(1).then((posts) => {
      setInitPosts(posts);
      setIsLoading(true);
    });
  }, [getMorePosts]);

  return (
    <>
      {isLogin ? (
        <Layout
          username={userData.username}
          avatar={userData?.avatar}
          className={`${style.homePage} container pt-4`}
        >
          <div className="postContainer">
            {isLoading ? (
              <InfintyScroll
                initData={initPosts}
                loading={
                  <div
                    className="spinner-border mx-auto mt-5 d-block"
                    role="status"
                  />
                }
                getNextPage={getMorePosts}
                Component={Post}
              />
            ) : (
              <div
                className="spinner-border mx-auto mt-5 d-block"
                role="status"
              />
            )}
          </div>
          <aside className={`${style.stickySide} d-none d-md-block`}>
            <div className="data flex-center">
              <Link href={`/profile/${userData.username}`}>
                <Avatar
                  className="cu-pointer"
                  width={50}
                  src={userData?.avatar || "/default_avatar.webp"}
                />
              </Link>

              <div className="details ms-3">
                <Link href={`/profile/${userData.username}`}>
                  <p className="m-0 p-0 select-none username cu-pointer text-muted">
                    {userData.username}
                  </p>
                </Link>

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
      ) : (
        <LoginForm isPage={false} />
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

  const { data } = await axios(`http://localhost:3005/users?token=${token}`);

  if (!data.length) {
    return {
      props: {
        isLogin: false,
      },
    };
  }

  return {
    props: {
      userData: data[0],
      isLogin: true,
    },
  };
};
