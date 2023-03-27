import React from "react";
import PostItem from "../PostItem/PostItem";
import Sliders from "../Sliders/Sliders";
import UserInfo from "../UserInfo/UserInfo";
import "./UserHome.scss";

const UserHome = () => {
  return (
    <>
      <div className="home-time-line-wraper">
        <div className="time-line">
          <div className="time-line-wraper">
            <Sliders />
            <PostItem />
          </div>
        </div>
        <UserInfo />
      </div>
    </>
  );
};

export default UserHome;
