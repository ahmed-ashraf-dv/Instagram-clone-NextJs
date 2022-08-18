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
      postId: post.postId,
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
  const LOCAL_API = process.env.NEXT_PUBLIC_LOCAL_API_LINK;

  const { token } = req.cookies;
  const { username, postId } = query;

  const { data: userData } = await request.post(
    `/user-data-with-token?token=${token}`
  );

  const { data: cuurentProfile } = await request({
    url: `/user-data?username=${username}`,
  });

  if (userData.code != 200 || cuurentProfile.code != 200) {
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
  const { data: post } = await axios(`${LOCAL_API}/getPostById/${postId}`);

  // Check if avilabel Post
  if (post.code !== 200) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  // Check if username his is publisher
  if (post.user_id !== cuurentProfile?._id) {
    return {
      redirect: {
        destination: `/profile/${username}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      userData: userData.user,
      cuurentProfile: cuurentProfile.user,
      cuurentProfileStaticts,
      post: post.post,
    },
  };
};
