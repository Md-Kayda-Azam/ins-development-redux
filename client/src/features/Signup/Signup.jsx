import React, { useState } from "react";
import { GrFacebook } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import birthday from "./birthday.png";
import "./Signup.scss";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { userSignUp } from "../../redux/auth/authAction";
import { ToastContainer } from "react-toastify";

const day = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const year = Array.from(
  { length: 118 },
  (_, i) => new Date().getFullYear() - i
);
const Signup = () => {
  const dispatch = useDispatch();
  // use navigate
  const navigate = useNavigate();
  const [signup, setSignup] = useState(true);
  const [birthDay, setBirthDay] = useState(false);

  const [input, setInput] = useState({
    auth: "",
    full_name: "",
    username: "",
    password: "",
    day: new Date().getDay(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  /// handle input chaneg
  const handleInput = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleActivation = (e) => {
    e.preventDefault();
    if (
      input.full_name === "" ||
      input.username === "" ||
      input.password === ""
    ) {
      swal({
        title: "Please field in the gap!",
        text: "You clicked the button!",
        icon: "error",
      });
    } else {
      setSignup(false);
      setBirthDay(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      userSignUp(
        {
          full_name: input.full_name,
          username: input.username,
          auth: input.auth,
          password: input.password,
          birth_day: input.day,
          birth_month: input.month,
          birth_year: input.year,
        },
        setInput,
        navigate("/activation/account"),
        e
      )
    );
  };

  const handleGoBack = () => {
    setSignup(true);
    setBirthDay(false);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        {signup && (
          <div className="login-wraper">
            <Link to="/" className="login-logo-link">
              {" "}
              <img
                src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                alt=""
                className="login-logo"
              />
            </Link>
            <span className="res-text">
              Sing up to see photos and video from your friends.
            </span>
            <button className="login-with-fb-register">
              {" "}
              <GrFacebook /> Login with Facebook
            </button>

            <div className="divider">OR</div>

            <div className="login-form">
              <input
                name="auth"
                type="text"
                className="login-input"
                value={input.auth}
                onChange={handleInput}
                placeholder="Mobile number or email"
              />
              <input
                name="full_name"
                type="text"
                value={input.full_name}
                onChange={handleInput}
                className="login-input"
                placeholder="Full Name"
              />
              <input
                name="username"
                type="text"
                value={input.username}
                onChange={handleInput}
                className="login-input"
                placeholder="User Name"
              />
              <input
                name="password"
                type="password"
                value={input.password}
                onChange={handleInput}
                className="login-input"
                placeholder="password"
              />

              <div className="res-info">
                <div className="res-from-text">
                  People who use our service may have upload your contact
                  information to Instagram.
                  <a href="#">Lear More</a>
                </div>
                <div className="res-from-text">
                  By singing up, you agree to our <a href="#">Terms</a>,{" "}
                  <a href="#">Privacy Policy</a> and
                  <a href="#"> Cookies Policy</a>
                  <a href="#"> Lear More</a>
                </div>
              </div>

              <button onClick={handleActivation} className="login-submit">
                Sign up
              </button>
            </div>
          </div>
        )}
        {birthDay && (
          <div className="login-wraper">
            <div className="form-header">
              <div className="birthday-logo">
                <img src={birthday} alt="" />
                <span>Add Your Birthday</span>
              </div>
              <div className="text-area">
                <p>This won't be a part of your public profile.</p>
                <a href="#">Why do I need to provide my birthday?</a>
              </div>
            </div>

            <div className="login-form">
              <div className="select-box">
                <select name="month" id="" onChange={handleInput}>
                  {month.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
                <select name="day" id="" onChange={handleInput}>
                  {day.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
                <select name="year" id="" onChange={handleInput}>
                  {year.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="res-info">
                <div className="res-from-text">
                  Use your own birthday, even if this account is for a business,
                  a pet, or something else
                </div>
                {/* <div className="res-from-text">
                  Use your own birthday, even if this account is for a business,
                  a pet, or something else
                </div> */}
              </div>

              <button type="submit" className="login-submit">
                Next
              </button>
              <div className="go-back">
                <button onClick={handleGoBack}>Go Back</button>
              </div>
            </div>
          </div>
        )}
      </form>

      <div className="singup-wraper">
        <span className="singup-text">
          Have an account?
          <Link to="/login" className="singup-link">
            {" "}
            Login In
          </Link>
        </span>
      </div>
      <div className="get-app">
        <span className="app-text">
          Get the app.
          <div className="app-logo">
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
              alt=""
            />
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
              alt=""
            />
          </div>
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
