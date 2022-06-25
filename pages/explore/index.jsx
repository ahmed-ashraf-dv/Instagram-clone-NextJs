/* eslint-disable @next/next/no-img-element */
import React from "react";
import PostsRow from "../../components/PostsRow";
import Layout from "../../layout";

import axios from "axios";

const Explore = ({ posts }) => {
  return (
    <Layout className="container-fluid p-4">
      <PostsRow posts={posts} />
    </Layout>
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

  const { data } = await axios(`http://localhost:3005/users?token=${token}`);

  if (!data.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const { data: posts } = await axios(`http://localhost:3000/api/explorePosts`);

  return {
    props: {
      posts: posts.posts,
    },
  };
};
