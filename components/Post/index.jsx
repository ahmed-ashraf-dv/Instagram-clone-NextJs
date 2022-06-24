/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import style from "../../styles/post.module.scss";

import Avatar from "../Avatar";
import PostFooter from "../PostFooter";
import CommentInput from "../CommentInput";

const CAPTION =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias maiores quas? Eligendi, cum. Rem, quod. Voluptates enim sed, quod illum quis quam minus cupiditate ea omnis excepturi deleniti! Aliquid, soluta quae? Eius sint molestiae quas facilis! Quibusdam iure, excepturi recusandae eos, reiciendis deleniti corporis veniam ducimus non sed ratione, nemo quaerat autem. A blanditiis aut consectetur molestias repudiandae ipsum commodi ea neque veritatis, rerum vel, molestiae at aspernatur, dolorum ullam voluptatibus in necessitatibus quasi id praesentium voluptate. Quisquam, cupiditate iusto sint reiciendis ea vero ullam iure ab optio omnis distinctio amet, dolorem quidem magni ex sapiente quos laboriosam totam maxime cumque ut, qui ipsam deleniti. Vero iure quidem, reprehenderit voluptatum illum officia perferendis numquam deserunt quam porro explicabo consequuntur, facere recusandae qui fugiat tempora excepturi quia iste cum officiis. Reprehenderit corrupti alias debitis iste vel voluptatem, quo praesentium officiis laudantium. Molestiae dolore sunt omnis fugiat commodi doloremque impedit quae officiis, temporibus nisi itaque iusto ullam libero! Veniam, repellat reiciendis. Ab, similique facilis. Ullam sapiente cupiditate ducimus quibusdam quod veritatis atque harum rerum quo error veniam illum nihil ea eveniet consequatur placeat autem, sint nesciunt praesentium minima optio voluptatibus porro tempore quas. Ullam nulla unde consequatur qui reiciendis error earum temporibus debitis architecto, autem dolorum maiores facilis facere voluptatum possimus consectetur quod ipsa hic rem, iusto similique eius sit iure? Molestias ipsum recusandae ea eveniet dolore nostrum necessitatibus architecto deleniti impedit quasi maxime, suscipit assumenda aliquam obcaecati harum praesentium, a voluptatem natus atque sapiente accusamus unde laudantium omnis odio? Quidem exercitationem quae recusandae. Dolore cum, at, ipsam dolores veniam eveniet iste assumenda veritatis quis quisquam similique sunt ab incidunt. Expedita laudantium magnam sequi totam, voluptates, hic eaque ipsam voluptatem reprehenderit nesciunt, accusamus dolorem. Saepe in tempore obcaecati, qui exercitationem reiciendis officiis sequi commodi temporibus asperiores, nesciunt explicabo aliquam nostrum expedita.";

const CAPTION_SIZE = 100;

const Post = () => {
  const [hideCaption, setHideCaption] = useState(true);

  console.log(CAPTION);

  const sizeHandelar = (caption) => {
    if (caption.length < CAPTION_SIZE) return bio;

    return caption.slice(0, CAPTION_SIZE) + "...";
  };

  return (
    <article className={`${style.post} border ms-md-4 mb-4`}>
      <header className="d-flex align-items-center p-2">
        <Avatar src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" />
        <p className="username m-0 ms-2">billieeilish</p>
      </header>
      <main className={`${style.imgBox}`}>
        <img
          src="/289026658_539852937875491_5226162573037377417_n.jfif"
          alt=""
          className={`${style.imsPost}`}
        />
      </main>
      <div className="actions">
        <PostFooter reverse>
          <p className="username cu-pointer m-0 mb-1 fw-bold">xx_for3on_xx</p>
          {/* <p className="caption mb-2 ms-1">
            <p className="bio">
              {hideCaption ? <>{sizeHandelar(CAPTION)}</> : CAPTION}
              <button
                hidden={!(CAPTION.length >= CAPTION_SIZE)}
                onClick={() => setHideCaption((prev) => !prev)}
                className="btn btn-link text-decoration-none m-0 ms-1 p-0"
              >
                Read {hideCaption ? "more" : "less"}
              </button>
            </p>
          </p> */}
        </PostFooter>
      </div>

      <CommentInput />
    </article>
  );
};

export default Post;
