import React from "react";
import "./AuthFooter.scss";

const Footer = () => {
  return (
    <div className="auth-footer">
      <ul>
        <li>
          <a href="#">Meta</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Jobs</a>
        </li>
        <li>
          <a href="#">Helps</a>
        </li>
        <li>
          <a href="#">API</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Terms</a>
        </li>
        <li>
          <a href="#">Top Account</a>
        </li>
        <li>
          <a href="#">Hashtags</a>
        </li>
        <li>
          <a href="#">Locations</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Contacts Uploading & Non-User</a>
        </li>
      </ul>
      <div className="copy-right-area">
        <select name="" id="">
          <option value="">English</option>
          <option value="">Bangla</option>
          <option value="">Arobic</option>
        </select>
        <span className="copy-right-text">© 2022 Instagram from Meta</span>
      </div>
    </div>
  );
};

export default Footer;
