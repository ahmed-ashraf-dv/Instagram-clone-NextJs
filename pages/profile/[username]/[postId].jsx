import React, { useEffect } from "react";

import Profile from "../../../components/Profile";
import request from "../../../utils/request";

import Head from "next/head";

import axios from "axios";

import { useDispatch } from "react-redux";
import { openModal } from "../../../store/ModalSlice";

const PostRoute = ({
  cuurentProfile,
  userData,
  cuurentProfileStaticts,
  post,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const currentData = {
      img: post.img,
      caption: post.caption,
      user: post.user,
      createdAt: post.createdAt,
      postId: post.id,
      cuurentUsername: userData.username,
    };

    dispatch(
      openModal({
        currentData,
        type: "Preview Post",
      })
    );
  }, [dispatch, post, userData]);

  return (
    <>
      <Head>
        <title>preview post</title>
      </Head>

      <Profile
        cuurentProfile={cuurentProfile}
        userData={userData}
        cuurentProfileStaticts={cuurentProfileStaticts}
      />
    </>
  );
};

export default PostRoute;

export const getServerSideProps = async ({ req, query }) => {
  const LOCAL_API = process.env.LOCAL_API_LINK;

  const { token } = req.cookies;
  const { username, postId } = query;

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const { data } = await request({
    url: `/users?token=${token}`,
  });

  const { data: cuurentProfile } = await request({
    url: `/users?username=${username}`,
  });

  if (!data?.length || !cuurentProfile?.length) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  const { data: cuurentProfileStaticts } = await axios(
    `${LOCAL_API}/getStaticts?username=${username}&token=${token}`
  );

  // Get Post Id Data
  const { data: postData } = await axios(`${LOCAL_API}/getPostById/${postId}`);
  const { post } = postData;

  // Check if avilabel Post
  if (!post || !post.length) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  // Check if username his is publisher
  if (post[0].user.username !== username) {
    return {
      redirect: {
        destination: `/profile/${username}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      userData: data[0],
      cuurentProfile: cuurentProfile[0],
      cuurentProfileStaticts: cuurentProfileStaticts,
      post: post[0],
    },
  };
};
