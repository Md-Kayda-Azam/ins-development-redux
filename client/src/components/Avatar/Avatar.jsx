import React from "react";
import { useSelector } from "react-redux";
import "./Avater.scss";

const Avatar = () => {
  const { user } = useSelector((state) => state.ins_auth);

  return (
    <>
      <img
        src={
          user.profile_photo
            ? user.profile_photo
            : "https://media.istockphoto.com/id/1327592449/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?b=1&s=170667a&w=0&k=20&c=GHn-aw4tVt8wpe8PyFBp4PRYNMO473UVUIYtAMxT5l0="
        }
        className="pass-img"
        alt=""
      />
    </>
  );
};

export default Avatar;
