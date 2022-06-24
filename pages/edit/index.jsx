import React from "react";
import style from "../../styles/accountEdit.module.scss";

import Layout from "../../layout";
import Avatar from "../../components/Avatar";
import InputGroup from "../../components/InputGroup";

const NAVIGATE_TAPS = [
  "Edit Profile",
  "Professional Account",
  "Change Password",
  "Apps and Websites",
  "Email notifications",
  "Push Notifications",
  "Manage Contacts",
  "Privacy and Security",
  "Login Activity",
  "Emails from Instagram",
  "Help",
];

const edit = () => {
  return (
    <Layout className="container pt-4">
      <article className={`${style.editsContainer} border`}>
        <nav className="navigate d-none d-md-block">
          <ul className={`list-unstyled border ${style.ulNavigate}`}>
            {NAVIGATE_TAPS.map((buttonText, idx) => (
              <li className={`p-0 ${idx === 0 ? style.active : ""}`} key={idx}>
                <button
                  className={`${style.navBtn} $ py-3 ps-4 pe-5 text-start btn btn-light w-100 h-100 border-0`}
                >
                  {buttonText}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <article className={`${style.edits} p-4 p-x-0 mx-auto`}>
          <form>
            <InputGroup alignStart>
              <div className="flex-start align-items-center gap-3">
                <label
                  htmlFor="avatar"
                  className={`cu-pointer ${style.avatar}`}
                >
                  <Avatar
                    width={50}
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  />
                </label>

                <div className="data">
                  <p className="m-0 username fw-200 text-muted">xx_for3on_xx</p>
                  <label
                    htmlFor="avatar"
                    className={`cu-pointer ${style.avatar}`}
                  >
                    <p className="btn m-0 btn-link p-0 text-decoration-none">
                      Change Profile Photo
                    </p>
                  </label>
                </div>
              </div>
              <input hidden id="avatar" type="file" />
            </InputGroup>

            <InputGroup>
              <label className="text-center text-md-start" htmlFor="name">
                Name
              </label>
              <input id="name" type="text" />
            </InputGroup>

            <p className="small text-muted text-center">
              Help people discover your account by using the name you&lsquo;re
              known by: either your full name, nickname, or business name. You
              can only change your name twice within 14 days.
            </p>

            <InputGroup>
              <label className="text-center text-md-start" htmlFor="username">
                Username
              </label>
              <input id="bio" type="text" />
            </InputGroup>

            <p className="small text-muted text-center">
              In most cases, you&lsquo;ll be able to change your username back
              to xx_for3on_xx for another 14 days.
            </p>

            <InputGroup>
              <label className="text-center text-md-start" htmlFor="website">
                Website
              </label>
              <input id="website" type="text" />
            </InputGroup>

            <InputGroup>
              <label className="text-center text-md-start" htmlFor="bio">
                Bio
              </label>
              <textarea id="username" type="text" />
            </InputGroup>

            <InputGroup>
              <label className="text-center text-md-start" htmlFor="email">
                Email
              </label>
              <input id="email" type="text" />
            </InputGroup>

            <button className="btn btn-primary small fw-bold">Submit</button>
          </form>
        </article>
      </article>
    </Layout>
  );
};

export default edit;
