import React, { useState, useEffect, useCallback } from "react";

import Layout from "../../layout";

import Avatar from "../Avatar";
import SaveWordSize from "../SaveWordSize";
import LoadingSpinner from "../LoadingSpinner";
import PostThumbnail from "../PostThumbnail";
import InfintyScroll from "../InfintyScroll";

import UserStaticts from "./UserStaticts";
import ProfileHeader from "./ProfileHeader";

import style from "../../styles/explore.module.scss";

import axios from "axios";
import useAuth from "../../hooks/useAuth";

const BIO_SIZE = 200; // Chracters

const Profile = ({ cuurentProfile, userData, cuurentProfileStaticts }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [initPosts, setInitPosts] = useState([]);

  // For Follow
  const [isFollowed, setIsFollowed] = useState(false);
  const [isFollowedLoading, setIsFollowedLoading] = useState(false);

  // Is Followed Now
  const [staticts, setStaticts] = useState({});
  const [followLoading, setFollowLoading] = useState(false);

  const { follow } = useAuth();

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
    setStaticts(cuurentProfileStaticts);
    setIsFollowedLoading(true);
  }, [cuurentProfileStaticts]);

  const followHandelar = () => {
    setFollowLoading(true);

    if (isFollowed) {
      follow({
        username: cuurentProfile.username,
        type: "unfollow",
        onSuccess: () => {
          setStaticts((prev) => ({ ...prev, followers: prev.followers - 1 }));
          setIsFollowed((prev) => !prev);
          setFollowLoading(false);
        },
        onError: (msg) => {
          alert(msg);
          setFollowLoading(false);
        },
      });

      return;
    }

    follow({
      username: cuurentProfile.username,
      onSuccess: () => {
        setStaticts((prev) => ({ ...prev, followers: prev.followers + 1 }));
        setIsFollowed((prev) => !prev);
        setFollowLoading(false);
      },
      onError: (msg) => {
        alert(msg);
        setFollowLoading(false);
      },
    });
  };

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
            isFollowedLoading={isFollowedLoading}
            MyProfile={cuurentProfile.username === userData.username}
            username={cuurentProfile.username}
            followHandelar={followHandelar}
            followLoading={followLoading}
          />
          <UserStaticts
            posts={staticts.posts || 0}
            followers={staticts.followers || 0}
            following={staticts.following || 0}
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
          pageProps={{ cuurentUsername: userData.username }}
        />
      ) : (
        <LoadingSpinner />
      )}
    </Layout>
  );
};

export default Profile;
