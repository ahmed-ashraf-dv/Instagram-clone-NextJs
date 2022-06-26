import React, { useState, useEffect, useCallback } from "react";

import Layout from "../../layout";
import Avatar from "../../components/Avatar";
import SaveWordSize from "../../components/SaveWordSize";
import UserStaticts from "./UserStaticts";
import ProfileHeader from "./ProfileHeader";
import LoadingSpinner from "../../components/LoadingSpinner";
import PostThumbnail from "../../components/PostThumbnail";
import InfintyScroll from "../../components/InfintyScroll";

import style from "../../styles/explore.module.scss";

import axios from "axios";

const BIO_SIZE = 200; // Chracters

const Profile = ({ cuurentProfile, userData, cuurentProfileStaticts }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [initPosts, setInitPosts] = useState([]);

  // For Follow
  const [isFollowed, setIsFollowed] = useState(false);
  const [isFollowedLoading, setIsFollowedLoading] = useState(false);

  const getMorePosts = useCallback(
    async (pageNum) => {
      const posts = axios(
        `/api/getPostsById/${cuurentProfile.id}?num=${pageNum}&amount=12`
      ).then(({ data }) => {
        const { posts } = data;

        return posts;
      });

      return posts;
    },
    [cuurentProfile]
  );

  useEffect(() => {
    getMorePosts(1).then((posts) => {
      setInitPosts(posts);
      setIsLoading(true);
    });
  }, [getMorePosts]);

  useEffect(() => {
    setIsFollowed(cuurentProfileStaticts.isFollowed);
    setIsFollowedLoading(true);
  }, [cuurentProfileStaticts]);

  return (
    <Layout
      avatar={userData.avatar}
      username={userData.username}
      className="container"
    >
      <div className="personal-data d-block text-center text-md-start d-md-flex my-5 pt-3 pb-1 p-md-3 p-md-5 m-md-5 gap-5">
        <div className="avatar">
          <Avatar
            width={150}
            src={cuurentProfile.avatar || "/default_avatar.webp"}
          />
        </div>
        <div className="data">
          <ProfileHeader
            isFollowed={isFollowed}
            setIsFollowed={setIsFollowed}
            isFollowedLoading={isFollowedLoading}
            MyProfile={cuurentProfile.username === userData.username}
            username={cuurentProfile.username}
          />
          <UserStaticts
            posts={cuurentProfileStaticts.posts}
            followers={cuurentProfileStaticts.followers}
            following={cuurentProfileStaticts.following}
          />
          <SaveWordSize
            caption={cuurentProfile.bio || "No caption"}
            className="bio"
            size={BIO_SIZE}
          />
        </div>
      </div>

      <hr />

      {isLoading ? (
        <InfintyScroll
          className={`row ${style.imgRow}`}
          initData={initPosts}
          loading={<LoadingSpinner />}
          getNextPage={getMorePosts}
          Component={PostThumbnail}
        />
      ) : (
        <LoadingSpinner />
      )}
    </Layout>
  );
};

export default Profile;

export const getServerSideProps = async ({ req, query }) => {
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

  const { data } = await axios(`http://localhost:3005/users?token=${token}`);
  const { data: cuurentProfile } = await axios(
    `http://localhost:3005/users?username=${username}`
  );

  const { data: cuurentProfileStaticts } = await axios(
    `http://localhost:3000/api/getStaticts?username=${username}`
  );

  if (!data?.length || !cuurentProfile?.length) {
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
      cuurentProfile: cuurentProfile[0],
      cuurentProfileStaticts: cuurentProfileStaticts,
    },
  };
};
