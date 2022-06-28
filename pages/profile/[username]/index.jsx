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
  const LOCAL_API = process.env.LOCAL_API_LINK;

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

  return {
    props: {
      userData: data[0],
      cuurentProfile: cuurentProfile[0],
      cuurentProfileStaticts: cuurentProfileStaticts,
    },
  };
};
