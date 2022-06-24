import React from "react";

import Avatar from "../components/Avatar";
import Post from "../components/Post";
import Layout from "../layout";

import style from "../styles/homePage.module.scss";

const Home = () => {
  return (
    <Layout className={`${style.homePage} container pt-4`}>
      <div className="postContainer">
        {[...Array(50)].map((_, idx) => (
          <Post key={idx} />
        ))}
      </div>
      <aside className={`${style.stickySide} d-none d-md-block`}>
        <div className="data flex-center">
          <Avatar
            width={50}
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
          />

          <div className="details ms-3">
            <p className="m-0 p-0 username text-muted">xx_for3on_xx</p>
            <p className="m-0 p-0 logounBtn btn btn-link text-decoration-none">
              logout
            </p>
          </div>
        </div>
      </aside>
    </Layout>
  );
};

export default Home;
