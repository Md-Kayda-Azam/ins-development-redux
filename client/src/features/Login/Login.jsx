import React, { useState } from "react";
import { GrFacebook } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./Login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    auth: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch();
    // loginUser(
    //   {
    //     auth: input.auth,
    //     password: input.password,
    //   },
    //   navigate("/")
    // )
  };

  return (
    <div className="login-container">
      <div className="login-wraper">
        <a href="#" className="login-logo-link">
          {" "}
          <img
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt=""
            className="login-logo"
          />
        </a>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            name="auth"
            value={input.auth}
            onChange={handleChange}
            type="text"
            className="login-input"
            placeholder="phone number, username or email"
          />
          <input
            name="password"
            type="text"
            value={input.password}
            onChange={handleChange}
            className="login-input"
            placeholder="password"
          />
          <button type="submit" className="login-submit">
            Log IN
          </button>
        </form>

        <div className="divider">OR</div>

        <a className="login-with-fb" href="#">
          {" "}
          <GrFacebook /> Login with Facebook
        </a>
        <Link className="forgot-password" to="/account-password-reset">
          Forgot Password?
        </Link>
      </div>
      <div className="singup-wraper">
        <span className="singup-text">
          Don't have an account?
          <Link to="/signup" className="singup-link">
            {" "}
            Sign up
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

export default Login;
