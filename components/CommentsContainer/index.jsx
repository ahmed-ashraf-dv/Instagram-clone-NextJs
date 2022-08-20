import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

import style from "../../styles/modal.module.scss";
import Avatar from "../Avatar";
import LoadingSpinner from "../LoadingSpinner";
import InfintyScroll from "../InfintyScroll";
import Comment from "./Comment";

import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/ModalSlice";
import { useRouter } from "next/router";

const CommentsContainer = () => {
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);

  const { currentData } = useSelector(({ ModalSlice }) => ModalSlice);

  const route = useRouter();
  const dispatch = useDispatch();

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

  const openProfile = () => {
    dispatch(closeModal());
    route.push(`/profile/${currentData?.user?.username}`);
  };

  return (
    <div className={`${style.commentsContainer}`}>
      <div className="puplisher-comment d-flex justify-content-end gap-1 p-3">
        <div className={`${style.bio} d-flex align-items-center`}>
          <p className="text-end">{currentData?.caption}</p>
        </div>

        <div
          className="me-2 ms-2 details flex-center flex-column cu-pointer"
          onClick={openProfile}
        >
          <div className="user-data flex-center">
            {currentData.user.isVerified && (
              <span
                style={{ transform: "scale(.8)" }}
                className="verified me-1"
              />
            )}

            <p className={`${style.username}`}>
              • {currentData?.user?.username}
            </p>
          </div>
        </div>

        <div className="avatar cu-pointer" onClick={openProfile}>
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
