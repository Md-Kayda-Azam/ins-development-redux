import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import activation from "./activation.png";
import Cookie from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import {
  activationByOtp,
  activationByOtpForgotPassword,
  resendForgotPassword,
  resendLink,
} from "../../redux/auth/authAction";
import { isEmail, isMobile } from "../../utility/validate";
import "./ForgotPasswordCode.scss";

const ForgotPasswordCode = () => {
  // const { user } = useSelector((state) => state.ins_auth.signup);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const activationOtp = Cookie.get("otp");
  const token = Cookie.get("forgotToken");

  const [activationC, setActivationC] = useState(false);
  const [invalidPass, setInvalidPass] = useState(false);

  const [codeSend, setCodeSend] = useState(false);

  const [numEma, setNumEma] = useState(false);

  useEffect(() => {
    setNumEma(true);
  }, [setNumEma]);

  const [numberChange, setNumberChange] = useState({
    btn: true,
    back: false,
  });

  const [saveBtn, setSaveBtn] = useState(true);

  const handleChange = (e) => {
    const { value } = e.target;
    if (/^\d{0,6}$/.test(value)) {
      setInput(value);
    }
    if (input.length === 5) {
      setSaveBtn(false);
    } else {
      setSaveBtn(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input === "") {
      swal({
        title: "Please field in the gap!",
        text: "You clicked the button!",
        icon: "error",
      });
    } else {
      dispatch(
        activationByOtpForgotPassword(
          {
            code: input,
          },
          token,
          navigate,
          setInvalidPass
        )
      );
    }
  };

  setTimeout(() => {
    setCodeSend(false);
  }, 10000);

  setTimeout(() => {
    setInvalidPass(false);
  }, 50000);

  useEffect(() => {
    if (isEmail(activationOtp)) {
      setNumberChange({
        btn: false,
        back: false,
      });
    } else if (isMobile(activationOtp)) {
      setNumberChange({
        btn: true,
        back: false,
      });
    }
  }, [setNumberChange]);

  useEffect(() => {
    if (!activationOtp) {
      navigate("/login");
    }
  });

  const handleSubmitResendCode = (e) => {
    e.preventDefault();
    dispatch(resendForgotPassword(activationOtp, setCodeSend, setInvalidPass));
  };

  return (
    <>
      <div className="login-container">
        <div className="login-wraper">
          <>
            <div className="form-header">
              <div className="birthday-logo">
                <img src={activation} alt="" />
                {codeSend && <p className="code-send">Your code was resent.</p>}
                <span>Just one more step</span>
              </div>
              <div className="text-area">
                <p>Enter the 6-digit code we sent to:</p>
                {numEma && (
                  <span
                    className={` ${
                      numberChange.btn ? "resend-code-ins" : "ksss"
                    }`}
                  >
                    {activationOtp} :
                    <button
                      className="resend-code"
                      onClick={handleSubmitResendCode}
                    >
                      resend code
                    </button>
                  </span>
                )}
              </div>
            </div>
            <form className="login-form from-in" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="######"
                name="input"
                value={input}
                onChange={handleChange}
              />

              <button
                type="submit"
                className={`login-submit-k ${saveBtn && "login-submit-ins"} `}
                disabled={saveBtn}
              >
                Confirm
              </button>
            </form>
            <div className="password-ins">
              {invalidPass && <p className="invalidPassd">Invalid OTP Code</p>}
            </div>
          </>
        </div>
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
    </>
  );
};

export default ForgotPasswordCode;
