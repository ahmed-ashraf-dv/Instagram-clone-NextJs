import React from "react";
import LoginForm from "../../components/LoginForm";

import Head from "next/head";
import request from "../../utils/request";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <LoginForm isPage={true} />
    </>
  );
};

export default LoginPage;

export const getServerSideProps = async ({ req }) => {
  const { token } = req.cookies;

  if (!token) {
    return {
      props: {},
    };
  }

  const { data } = await request({
    url: `/user-data?token=${token}`,
  });

  if (data.code !== 200) {
    return {
      props: {},
    };
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};
