import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./ProfileChangePasssword.scss";
import swal from "sweetalert";
import { changePassowrd } from "../../redux/auth/authAction";
import HomeHeader from "../HomeHeader/HomeHeader";
import Avatar from "../Avatar/Avatar";

const ProfileChangePasssword = () => {
  const { user } = useSelector((state) => state.ins_auth);

  const { token } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [invalidPass, setInvalidPass] = useState(false);
  const [passwordNotMatch, setPasswordNotMatch] = useState(false);

  const [input, setInput] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  setTimeout(() => {
    setInvalidPass(false);
  }, 5000);
  setTimeout(() => {
    setPasswordNotMatch(false);
  }, 5000);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.newPassword === "" || input.confirmPassword === "") {
      setInvalidPass(true);
    } else {
      if (input.newPassword === input.confirmPassword) {
        swal({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
        });
        dispatch(changePassowrd(token, input.newPassword, navigate));
      } else {
        setPasswordNotMatch(true);
      }
    }
  };

  return (
    <>
      <HomeHeader />
      <div className="login-container sec-reset">
        <div className="login-wraper c-p-sec-p ">
          <div className="reset-info-title">
            <Avatar />
            <span>{user.username}</span>
          </div>
          <form className="login-form p-c-form-p" onSubmit={handleSubmit}>
            <input
              name="newPassword"
              value={input.newPassword}
              onChange={handleChange}
              type="text"
              className="login-input c-p-input"
              placeholder="New password"
            />

            <div className="password-ins">
              {passwordNotMatch && <p>Password not match</p>}
            </div>
            <input
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={handleChange}
              type="text"
              className="login-input c-p-input"
              placeholder="New password, again"
            />
            <button type="submit" className="login-submit c-p-input">
              Change password
            </button>
          </form>
          <div className="inva">
            {invalidPass && <p className="invalidPassd">Fill in the blanks.</p>}
          </div>

          <Link to="/" className="skip">
            skip
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileChangePasssword;
