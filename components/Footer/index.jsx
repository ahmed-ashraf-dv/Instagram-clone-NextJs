import React from "react";
import style from "../../styles/fotter.module.scss";

const TAPS = [
  "Meta",
  "About",
  "Blog",
  "Jobs",
  "Help",
  "API",
  "Privacy",
  "Terms",
  "Top Accounts",
  "Hashtags",
  "Locations",
  "Instagram Lite",
  "Contact Uploading & Non-Users",
];

const Footer = () => {
  return (
    <footer className={style.mainFotter + " pt-3"}>
      <div className={`${style.taps} text-center`}>
        {TAPS.map((tap, idx) => (
          <p
            key={idx}
            className="w-fit p-0 m-2 small btn btn-link text-decoration-none text-muted"
          >
            {tap}
          </p>
        ))}
      </div>
      <p className={`${style.copyright} text-muted text-center`}>
        © 2022 Instagram from Meta By Ahmed Ashraf =&gt; (FoR3oN)
      </p>
    </footer>
  );
};

export default Footer;
