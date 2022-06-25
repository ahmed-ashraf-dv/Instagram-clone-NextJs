/* eslint-disable @next/next/no-img-element */
import React from "react";
import SaveWordSize from "../SaveWordSize";

import style from "../../styles/post.module.scss";

import PostHeader from "./PostHeader";
import PostFooter from "../PostFooter";
import CommentInput from "../CommentInput";
import PostMain from "./PostMain";

const CAPTION =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias maiores quas? Eligendi, cum. Rem, quod. Voluptates enim sed, quod illum quis quam minus cupiditate ea omnis excepturi deleniti! Aliquid, soluta quae? Eius sint molestiae quas facilis! Quibusdam iure, excepturi recusandae eos, reiciendis deleniti corporis veniam ducimus non sed ratione, nemo quaerat autem. A blanditiis aut consectetur molestias repudiandae ipsum commodi ea neque veritatis, rerum vel, molestiae at aspernatur, dolorum ullam voluptatibus in necessitatibus quasi id praesentium voluptate. Quisquam, cupiditate iusto sint reiciendis ea vero ullam iure ab optio omnis distinctio amet, dolorem quidem magni ex sapiente quos laboriosam totam maxime cumque ut, qui ipsam deleniti. Vero iure quidem, reprehenderit voluptatum illum officia perferendis numquam deserunt quam porro explicabo consequuntur, facere recusandae qui fugiat tempora excepturi quia iste cum officiis. Reprehenderit corrupti alias debitis iste vel voluptatem, quo praesentium officiis laudantium. Molestiae dolore sunt omnis fugiat commodi doloremque impedit quae officiis, temporibus nisi itaque iusto ullam libero! Veniam, repellat reiciendis. Ab, similique facilis. Ullam sapiente cupiditate ducimus quibusdam quod veritatis atque harum rerum quo error veniam illum nihil ea eveniet consequatur placeat autem, sint nesciunt praesentium minima optio voluptatibus porro tempore quas. Ullam nulla unde consequatur qui reiciendis error earum temporibus debitis architecto, autem dolorum maiores facilis facere voluptatum possimus consectetur quod ipsa hic rem, iusto similique eius sit iure? Molestias ipsum recusandae ea eveniet dolore nostrum necessitatibus architecto deleniti impedit quasi maxime, suscipit assumenda aliquam obcaecati harum praesentium, a voluptatem natus atque sapiente accusamus unde laudantium omnis odio? Quidem exercitationem quae recusandae. Dolore cum, at, ipsam dolores veniam eveniet iste assumenda veritatis quis quisquam similique sunt ab incidunt. Expedita laudantium magnam sequi totam, voluptates, hic eaque ipsam voluptatem reprehenderit nesciunt, accusamus dolorem. Saepe in tempore obcaecati, qui exercitationem reiciendis officiis sequi commodi temporibus asperiores, nesciunt explicabo aliquam nostrum expedita.";

const CAPTION_SIZE = 100;

const Post = () => {
  return (
    <article className={`${style.post} border ms-md-4 mb-4`}>
      <PostHeader />
      <PostMain />
      <PostFooter reverse>
        <p className="username cu-pointer m-0 mb-1 fw-bold select-none">
          xx_for3on_xx
        </p>
        <SaveWordSize
          caption={CAPTION}
          size={CAPTION_SIZE}
          className="bio caption mb-2 ms-1"
        />
      </PostFooter>
      <CommentInput />
    </article>
  );
};

export default Post;
