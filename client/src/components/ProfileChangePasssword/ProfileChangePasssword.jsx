import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./ProfileChangePasssword.scss";
import swal from "sweetalert";
import { changePassowrd } from "../../redux/auth/authAction";

const ProfileChangePasssword = () => {
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
      <div className="login-container sec-reset">
        <div className="login-wraper c-p-sec-p">
          <div className="reset-info-title">
            <img
              src="https://www.goodmorningimagesdownload.com/wp-content/uploads/2021/11/Free-Smart-Boy-Dp-Pics-Wallpaper-Pictures-Download-1.jpg"
              alt=""
              className="login-logo"
            />
            <span>azam</span>
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

          <button>skip</button>
        </div>
      </div>
    </>
  );
};

export default ProfileChangePasssword;
