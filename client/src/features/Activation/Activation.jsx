import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./Activation.scss";
import activation from "./activation.png";
import Cookie from "js-cookie";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { activationByOtp, resendLink } from "../../redux/auth/authAction";
import { isEmail, isMobile } from "../../utility/validate";

const Activation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const activationEmail = Cookie.get("otp");

  const [activationC, setActivationC] = useState(false);
  const [numberField, setNumberField] = useState(false);
  const [codeSend, setCodeSend] = useState(false);

  const [numberChange, setNumberChange] = useState({
    btn: true,
    back: false,
  });
  const [inputOld, setInputOld] = useState(true);
  const [inputNew, setInputNew] = useState(false);
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
  console.log(activationEmail);
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
        activationByOtp(
          {
            code: input,
            email: Cookie.get("otp"),
          },
          navigate,
          setActivationC
        )
      );
    }
  };

  setTimeout(() => {
    setCodeSend(false);
  }, 10000);

  useEffect(() => {
    if (isEmail(activationEmail)) {
      setNumberChange({
        btn: false,
        back: false,
      });
    } else if (isMobile(activationEmail)) {
      setNumberChange({
        btn: true,
        back: false,
      });
    }
  }, [setNumberChange]);

  useEffect(() => {
    if (!activationEmail) {
      navigate("/login");
    }
  });

  //handleChnageNumber
  const handleChnageNumber = () => {
    setInputNew(true);
    setInputOld(false);
    setNumberChange({
      btn: true,
      back: true,
    });
  };
  //handleBack
  const handleBack = () => {
    setInputNew(false);
    setInputOld(true);
    setNumberChange({
      btn: true,
      back: false,
    });
  };

  const handleSubmitResendCode = (e) => {
    e.preventDefault();
    dispatch(resendLink(activationEmail, setCodeSend));
  };

  return (
    <>
      <div className="login-container">
        <div className="login-wraper">
          {inputOld && (
            <>
              <div className="form-header">
                <div className="birthday-logo">
                  <img src={activation} alt="" />
                  {codeSend && (
                    <p className="code-send">Your code was resent.</p>
                  )}
                  <span>Just one more step</span>
                </div>
                <div className="text-area">
                  <p>Enter the 6-digit code we sent to:</p>
                  <span
                    className={` ${
                      numberChange.btn ? "resend-code-ins" : "ksss"
                    }`}
                  >
                    {activationEmail} :
                    {!numberChange.btn && !numberChange.back && (
                      <button
                        className="resend-code"
                        onClick={handleSubmitResendCode}
                      >
                        resend code
                      </button>
                    )}
                  </span>
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
            </>
          )}
          {inputNew && (
            <>
              <div className="form-header">
                <div className="birthday-logo">
                  <img src={activation} alt="" />
                  {codeSend && (
                    <p className="code-send">Your code was resent.</p>
                  )}
                  <span>Change phone number</span>
                </div>
                <div className="text-area">
                  <p>Current phone number:</p>
                  <span
                    className={` ${
                      numberChange.btn ? "resend-code-ins" : "ksss"
                    }`}
                  >
                    {activationEmail}
                  </span>
                </div>
              </div>
              <form className="login-form from-in" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="New phone number"
                  name="input"
                  value={input}
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  className={`login-submit-k ${saveBtn && "login-submit-ins"} `}
                  disabled={saveBtn}
                >
                  Change
                </button>
              </form>
            </>
          )}

          {activationC && (
            <p className="invalid-code">
              That code isn't valid. You can request a new one.
            </p>
          )}
          {numberField && (
            <p className="invalid-code">Please enter a phone number.</p>
          )}
          {numberChange.btn && (
            <div className="number-and-code-request">
              <button onClick={handleChnageNumber}>Change Number</button> |
              <button onClick={handleSubmitResendCode}>
                {" "}
                Request New Code
              </button>
            </div>
          )}
          {numberChange.back && (
            <button className="backBtn" onClick={handleBack}>
              Go Back
            </button>
          )}
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

export default Activation;
