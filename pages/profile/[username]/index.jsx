import React from "react";

import request from "../../../utils/request";
import axios from "axios";

import Profile from "../../../components/Profile";
import Head from "next/head";

const ProfileRoute = (props) => {
  return (
    <>
      <Head>
        <title>{props.cuurentProfile.username}</title>
      </Head>

      <Profile {...props} />
    </>
  );
};

export default ProfileRoute;

export const getServerSideProps = async ({ req, query }) => {
  const LOCAL_API = process.env.NEXT_PUBLIC_LOCAL_API_LINK;

  const { token } = req.cookies;
  const { username } = query;

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const { data: userData } = await request({
    url: `/user-data?token=${token}`,
  });

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

  return {
    props: {
      userData: userData.user,
      cuurentProfile: cuurentProfile.user,
      cuurentProfileStaticts,
    },
  };
};
