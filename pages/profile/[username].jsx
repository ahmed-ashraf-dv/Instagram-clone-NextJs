import React, { useState, useEffect } from "react";

import Layout from "../../layout";
import PostsRow from "../../components/PostsRow";
import Avatar from "../../components/Avatar";
import SaveWordSize from "../../components/SaveWordSize";
import UserStaticts from "./UserStaticts";
import ProfileHeader from "./ProfileHeader";

import axios from "axios";

const BIO_SIZE = 200; // Chracters

const Profile = ({ userData }) => {
  const [postLoading, setPostLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios(`/api/getPostsById/${userData.id}`).then(({ data }) => {
      setPosts(data.posts);
      setPostLoading(true);
    });
  }, [userData]);

  return (
    <Layout className="container">
      <div className="personal-data d-block text-center text-md-start d-md-flex my-5 pt-3 pb-1 p-md-3 p-md-5 m-md-5 gap-5">
        <div className="avatar">
          <Avatar width={150} src={userData.avatar || "/default_avatar.webp"} />
        </div>
        <div className="data">
          <ProfileHeader username={userData.username} />
          <UserStaticts
            posts={userData.posts.length}
            followers={userData.followers.length}
            following={userData.following.length}
          />
          <SaveWordSize
            caption={userData.bio || "No caption"}
            className="bio"
            size={BIO_SIZE}
          />
        </div>
      </div>

      <hr />

      {postLoading ? (
        <PostsRow posts={posts} />
      ) : (
        <div className="spinner-border m-auto d-block mt-5" role="status"></div>
      )}
    </Layout>
  );
};

export default Profile;

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

  return {
    props: {
      userData: data[0],
    },
  };
};
