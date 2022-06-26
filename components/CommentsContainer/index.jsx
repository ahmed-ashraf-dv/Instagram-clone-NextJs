import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

import style from "../../styles/modal.module.scss";
import Avatar from "../Avatar";
import LoadingSpinner from "../LoadingSpinner";
import InfintyScroll from "../InfintyScroll";
import Comment from "./Comment";

import { useSelector } from "react-redux";

const CommentsContainer = () => {
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);

  const { currentData } = useSelector(({ ModalSlice }) => ModalSlice);

  const getMoreComments = useCallback((id) => {
    const posts = axios(`/api/getComments/${id}?amount=20&num=1`).then(
      ({ data }) => {
        return data.posts;
      }
    );

    return posts;
  }, []);

  useEffect(() => {
    getMoreComments(currentData?.postId).then((data) => {
      setComments(data);
      setLoadingComments(false);
    });
  }, [getMoreComments, currentData]);

  return (
    <div className={`${style.commentsContainer}`}>
      <div className="puplisher-comment d-flex justify-content-end gap-1 p-3">
        <div className={`${style.bio}`}>
          <p className="text-end">{currentData?.caption}</p>
        </div>

        <div className="me-2 ms-2 details flex-center flex-column">
          <p className={`${style.username}`}>• {currentData?.user?.username}</p>
        </div>

        <div className="avatar">
          <Avatar src={currentData?.user?.avatar} />
        </div>
      </div>

      <div className={`${style.usersComments}`}>
        {loadingComments ? (
          <LoadingSpinner />
        ) : (
          <InfintyScroll
            initData={comments}
            loading={<LoadingSpinner />}
            getNextPage={getMoreComments}
            Component={Comment}
          />
        )}
      </div>
    </div>
  );
};

export default CommentsContainer;
