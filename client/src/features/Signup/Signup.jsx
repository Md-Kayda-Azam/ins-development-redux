import React, { useEffect, useState } from "react";
import { GrFacebook } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import birthday from "./birthday.png";
import "./Signup.scss";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import right from "./img/right.png";
import wrong from "./img/wrong.png";
import getCode from "./img/getCode.png";
import {
  signUpCheckAdress,
  signUpCheckUsername,
  userSignUp,
} from "../../redux/auth/authAction";
import { isEmail, isMobile, isUsername } from "../../utility/validate";
import { getRandom } from "../../utility/math";

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
  const [mobile_ise, setMobile_ise] = useState(false);

  const [input, setInput] = useState({
    auth: "",
    full_name: "",
    username: "",
    password: "",
    day: new Date().getDay(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const handleCodeRandom = (e) => {
    e.preventDefault();
    const getRandomd = getRandom(145, 658);
    setInput({
      username: input.auth + getRandomd,
    });
  };

  const [valid, setValid] = useState({
    right: false,
    wrong: false,
  });
  const [validu, setValidu] = useState({
    rightu: false,
    wrongu: false,
  });
  const [btnD, setBtnD] = useState(true);
  const [full_name, setFull_name] = useState(false);
  const [username, setUsername] = useState(false);
  /// handle input chaneg
  const handleInput = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  setTimeout(() => {
    setMobile_ise(false);
  }, 10000);

  const handleActivation = (e) => {
    e.preventDefault();
    setSignup(false);
    setBirthDay(true);
    // if (input.auth === "") {
    //   console.log("Auth check the from");
    // } else if (input.full_name === "") {
    //   console.log("Full_name check the from");
    // } else if (input.username === "") {
    //   console.log("username check the from");
    // } else if (input.password === "") {
    //   console.log("password check the from");
    // } else {
    //   if (valid.right === true) {
    //     setSignup(false);
    //     setBirthDay(true);
    //   } else {
    //     // console.log("Enter a valid email address.");
    //     setMobile_ise(true);
    //   }
    //   if (valid.right === true) {
    //     setSignup(false);
    //     setBirthDay(true);
    //   } else {
    //     // console.log("Enter a valid Phone number.");
    //     setMobile_ise(true);
    //   }
    // }
  };
  const handleBlur = () => {
    if (isEmail(input.auth)) {
      setValid({
        right: true,
        wrong: false,
      });
      setBtnD(false);
      dispatch(signUpCheckAdress(input.auth, setValid, setBtnD));
    } else if (isMobile(input.auth)) {
      setValid({
        right: true,
        wrong: false,
      });
      setBtnD(false);
      dispatch(signUpCheckAdress(input.auth, setValid, setBtnD));
    } else {
      setValid({
        wrong: true,
        right: false,
      });
      setBtnD(true);
    }
  };
  const handleBlurUsername = () => {
    if (isUsername(input.username)) {
      setValidu({
        wrongu: false,
        rightu: true,
      });
      setBtnD(false);
      dispatch(signUpCheckUsername(input.username, setValidu, setBtnD));
    } else {
      setValidu({
        wrongu: true,
        rightu: false,
      });
      setBtnD(true);
    }
  };
  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;

  const handleShowPassword = (e) => {
    e.preventDefault();
    setChangePassword(changeIcon);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid)
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

  const handleBlurFullname = () => {
    if (input.full_name) {
      setFull_name(true);
    } else {
      setFull_name(false);
    }
  };
  const handleBlurPAssword = () => {
    if (input.password) {
      setUsername(true);
    } else {
      setUsername(false);
    }
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
                className="login-input auth"
                value={input.auth}
                onChange={handleInput}
                placeholder="Mobile number or email"
                onBlur={handleBlur}
              />
              {valid.right && <img className="auth" src={right} alt="" />}
              {valid.wrong && <img className="auth" src={wrong} alt="" />}
              <input
                name="full_name"
                type="text"
                value={input.full_name}
                onChange={handleInput}
                className="login-input"
                placeholder="Full Name"
                onBlur={handleBlurFullname}
              />
              {full_name && <img className="auth" src={right} alt="" />}
              <input
                name="username"
                type="text"
                value={input.username}
                onChange={handleInput}
                className="login-input username"
                placeholder="User Name"
                onBlur={handleBlurUsername}
              />
              <div className="password-hh">
                {validu.rightu && <img className="auth" src={right} alt="" />}
                {validu.wrongu && <img className="auth" src={wrong} alt="" />}
                {/* <button className="btn-code" onClick={handleCodeRandom}>
                  <img className="get-code" src={getCode} alt="" />
                </button> */}
              </div>
              <input
                name="password"
                type={changePassword ? "password" : "text"}
                value={input.password}
                onChange={handleInput}
                className="login-input"
                placeholder="password"
                onBlur={handleBlurPAssword}
              />
              <div className="password-oo">
                {username && <img className="auth" src={right} alt="" />}
                {username && (
                  <button className="show-hide" onClick={handleShowPassword}>
                    {changeIcon ? "Hide" : "Show"}
                  </button>
                )}
              </div>
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
              <button
                onClick={handleActivation}
                className="login-submit"
                disabled={btnD}
              >
                Sign up
              </button>
              {mobile_ise && <p>Already axists Email or Phone number.</p>}
              {/* {mobile_ise && <p>Enter a valid Email or Phone number.</p>} */}
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
