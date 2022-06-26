import React from "react";
import InputGroup from "../InputGroup";
import Avatar from "../Avatar";
import style from "../../styles/accountEdit.module.scss";

const editForm = ({ userData }) => {
  return (
    <article className={`${style.edits} p-4 p-x-0 mx-auto`}>
      <form>
        <InputGroup alignStart>
          <div className="flex-start align-items-center gap-3">
            <label htmlFor="avatar" className={`cu-pointer ${style.avatar}`}>
              <Avatar
                width={50}
                src={userData.avatar || "/default_avatar.webp"}
              />
            </label>

            <div className="data">
              <p className="m-0 username fw-200 text-muted">
                {userData.username}
              </p>
              <label htmlFor="avatar" className={`cu-pointer ${style.avatar}`}>
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
          <input defaultValue={userData.name} id="name" type="text" />
        </InputGroup>

        <p className="small text-muted text-center">
          Help people discover your account by using the name you&lsquo;re known
          by: either your full name, nickname, or business name. You can only
          change your name twice within 14 days.
        </p>

        <InputGroup>
          <label className="text-center text-md-start" htmlFor="username">
            Username
          </label>
          <input defaultValue={userData.username} id="username" type="text" />
        </InputGroup>

        <p className="small text-muted text-center">
          In most cases, you&lsquo;ll be able to change your username back to
          xx_for3on_xx for another 14 days.
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
          <textarea
            defaultValue={userData.bio || "No Bio"}
            id="bio"
            type="text"
          />
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
  );
};

export default editForm;
