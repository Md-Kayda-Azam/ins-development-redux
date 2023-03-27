import React from "react";
import FooterSideBar from "./FooterSideBar";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <>
      <div className="side-bar">
        <div className="side-bar-wraper">
          <div className="switch-profile">
            <img
              src="https://cdn.pixabay.com/photo/2021/12/28/04/38/cute-6898591_960_720.jpg"
              alt=""
            />
            <div className="name">
              <a href="#">
                <b>azam33t</b>
              </a>
              <span>Md Kayda Azam</span>
            </div>
            <a href="#">Switch</a>
          </div>
          <div className="sugection-for-you">
            <span>Suggestions For You</span>
            <a href="#">See All</a>
          </div>
        </div>
      </div>
      <FooterSideBar />
    </>
  );
};

export default SideBar;
