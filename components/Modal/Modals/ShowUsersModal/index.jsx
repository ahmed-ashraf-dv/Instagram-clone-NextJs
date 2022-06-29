import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import axios from "axios";

import style from "../../../../styles/modal.module.scss";

import InfintyScroll from "../../../InfintyScroll";
import LoadingSpinner from "../../../LoadingSpinner";
import UserCard from "./UserCard";

const ShowUsersModal = () => {
  const { cuurentUsername, type } = useSelector(({ ModalSlice }) => ModalSlice);

  const [isLoading, setIsLoading] = useState(false);
  const [initPosts, setInitPosts] = useState([]);

  const getUsers = useCallback(
    async (pageNum) => {
      let route = "";

      if (type === "Followers") {
        route = "getUserFollowers";
      } //
      else {
        route = "getUserFollowing";
      }

      const { data: usersData } = await axios(
        `/api/${route}/${cuurentUsername}?num=${pageNum}&amount=5`
      );

      const { users } = usersData;

      return users;
    },
    [type, cuurentUsername]
  );

  useEffect(() => {
    getUsers(1).then((users) => {
      const orderByDate = (array) =>
        array.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });

      setInitPosts(orderByDate(users));
      setIsLoading(true);
    });
  }, [getUsers]);

  return (
    <article className={`${style.showUsersModal} flex-center flex-column`}>
      <header
        className={`${style.stickyHeader} border w-100 p-2 border-top-0 border-start-0 border-end-0`}
      >
        <p className="text-center fw-bold">{type}</p>
      </header>
      {isLoading ? (
        <InfintyScroll
          initData={initPosts}
          loading={<LoadingSpinner />}
          getNextPage={getUsers}
          Component={UserCard}
          className="w-100"
        />
      ) : (
        <LoadingSpinner />
      )}
    </article>
  );
};

export default ShowUsersModal;
