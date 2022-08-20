import React from "react";
import style from "../../styles/accountEdit.module.scss";

import Layout from "../../layout";
import EditForm from "../../components/EditForm";
import request from "../../utils/request";

import Head from "next/head";

const NAVIGATE_TAPS = [
  "Edit Profile",
  "Professional Account",
  "Change Password",
  "Apps and Websites",
  "Email notifications",
  "Push Notifications",
  "Manage Contacts",
  "Privacy and Security",
  "Login Activity",
  "Emails from Instagram",
  "Help",
];

const edit = ({ userData }) => {
  return (
    <>
      <Head>
        <title>{`Edit ${userData.name || ""} Profile`}</title>
      </Head>

      <Layout
        username={userData.username}
        avatar={userData?.avatar}
        className="container pt-4"
      >
        <article className={`${style.editsContainer} border`}>
          <nav className="navigate d-none d-md-block">
            <ul className={`list-unstyled border m-0 ${style.ulNavigate}`}>
              {NAVIGATE_TAPS.map((buttonText, idx) => (
                <li
                  className={`p-0 ${idx === 0 ? style.active : ""}`}
                  key={idx}
                >
                  <button
                    className={`${style.navBtn} $ py-3 ps-4 pe-5 text-start btn btn-light w-100 h-100 border-0`}
                  >
                    {buttonText}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <EditForm userData={userData} />
        </article>
      </Layout>
    </>
  );
};

export default edit;

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

  return {
    props: {
      userData: data.user,
    },
  };
};
