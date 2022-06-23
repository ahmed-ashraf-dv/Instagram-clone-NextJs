/* eslint-disable @next/next/no-img-element */
import React from "react";
import PostsRow from "../../components/PostsRow";
import Layout from "../../layout";

const Explore = () => {
  return (
    <Layout className="container-fluid p-4">
      <PostsRow posts={[...Array(20)]} />
    </Layout>
  );
};

export default Explore;
