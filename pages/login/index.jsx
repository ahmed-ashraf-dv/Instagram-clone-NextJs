import React from "react";
import LoginForm from "../../components/LoginForm";
import axios from "axios";

const LoginPage = () => {
  return <LoginForm isPage={true} />;
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
    url: `/users?token=${token}`,
  });

  if (!data.length) {
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
