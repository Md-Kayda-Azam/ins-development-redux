import { getRandom } from "../utility/math.js";
import User from "../models/User.js";
import createError from "../utility/createError.js";
import { hashPassword, varifyPassword } from "../utility/hash.js";
import {
  sendActivationLink,
  sentForgotPasswordLink,
} from "../utility/sendMail.js";
import { createToken, tokenVerify } from "../utility/token.js";
import { isEmail, isMobile } from "../utility/validate.js";
import { sendOTP } from "../utility/sendSMS.js";

/**
 * @access public
 * @route /api/user/register
 * @method post
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const signupIns = async (req, res, next) => {
  try {
    // getform data
    const {
      full_name,
      username,
      auth,
      password,
      birth_day,
      birth_month,
      birth_year,
      gender,
    } = req.body;

    // Validation
    if (!full_name || !username || !auth || !password) {
      next(createError(400, "All fields are requored!"));
    }
    // initial auth value
    let mobileData = null;
    let emailData = null;

    if (isEmail(auth)) {
      emailData = auth;
      const emailCheck = await User.findOne({ email: auth });
      if (emailCheck) {
        return next(createError(400, "Email already axists!"));
      }
    } else if (isMobile(auth)) {
      mobileData = auth;
      const mobileCheck = await User.findOne({ mobile: auth });
      if (mobileCheck) {
        return next(createError(400, "Mobile already axists!"));
      }
    } else {
      return next(createError(400, "Invalid Mobile or Email"));
    }

    // verify activation code
    let activationcode = getRandom(100000, 999999);

    // check activation code
    const checkCode = await User.findOne({ access_token: activationcode });

    // check code
    if (checkCode) {
      activationcode = getRandom(100000, 999999);
    }

    // Create User
    const user = await User.create({
      full_name,
      username,
      mobile: mobileData,
      email: emailData,
      password: hashPassword(password),
      birth_day,
      birth_month,
      birth_year,
      gender,
      access_token: activationcode,
    });

    if (user) {
      if (emailData) {
        // create activation token
        const activationToken = createToken({ id: user._id }, "30d");

        sendActivationLink(user.email, {
          name: user.full_name + " " + user.username,
          link: `${
            process.env.APP_URL + ":" + process.env.SERVER_PORT
          }/api/v1/user/activate/${activationToken}`,
          code: activationcode,
          email: emailData,
        });

        // send respone
        const token = createToken({ id: user._id }, "365d");

        res
          .status(200)
          .cookie("otp", user.email, {
            expires: new Date(Date.now() + 1000 * 60 * 15),
          })
          .cookie("authToken", token)
          .json({
            message: "User Created Successful",
            user: user,
          });
      }

      if (mobileData) {
        // create activation OTP

        sendOTP(
          user.mobile,
          `Hi ${user.full_name} ${user.username}, Your account activation OTP is ${activationcode})`
        );

        // send respone
        const token = createToken({ id: user._id }, "365d");
        res
          .status(200)
          .cookie("otp", user.mobile, {
            expires: new Date(Date.now() + 1000 * 60 * 15),
          })
          .cookie("authToken", token)
          .json({
            message: "User Created Successful",
            user: user,
          });
      }
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/user/login
 * @method post
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // User email axists validate
    const loginUser = await User.findOne({ email: email });

    // validation form
    if (!email || !password) {
      next(createError(400, "All fields are requored!"));
    } else if (!loginUser) {
      next(createError(400, "Login user not found"));
    } else if (!isEmail(email)) {
      next(createError(400, "Invalid email address"));
    } else {
      if (!varifyPassword(password, loginUser.password)) {
        next(createError(400, "Wrong password"));
      } else {
        // create token
        const token = createToken({ id: loginUser._id }, "365d");

        res.status(200).cookie("authToken", token).json({
          message: "User Login Successful",
          user: loginUser,
          token: token,
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/user/me
 * @method Get
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const loggedInUser = async (req, res, next) => {
  try {
    const auth_token = req.headers.authorization;

    if (!auth_token) {
      next(createError(400, "Token not found"));
    } else {
      const token = auth_token.split(" ")[1];
      const user = tokenVerify(token);

      if (!user) {
        next(createError(400, "Invalid Token"));
      } else {
        const loggedInUser = await User.findById(user.id);

        if (!loggedInUser) {
          next(createError(400, "User data not found"));
        } else {
          res.status(200).json({
            message: "User data Stable",
            user: loggedInUser,
          });
        }
      }
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/user/account activate by Code
 * @method Post
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const activateAccountByCode = async (req, res, next) => {
  try {
    const { code } = req.body;

    const user = await User.findOne().and([
      { access_token: code },
      { isActivate: false },
    ]);

    if (!user) {
      next(createError(400, "Activation user not found"));
    } else {
      await User.findByIdAndUpdate(user.id, {
        isActivate: true,
        access_token: "",
      });

      res.status(200).json({
        message: "User account activation successful",
      });
    }
  } catch (error) {
    next(error);
  }
};
/**
 * Activate Account By Change NumberCode
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
export const activateAccountByChangeNumberCode = async (req, res, next) => {
  try {
    // getform data
    const { number } = req.body;

    // Validation
    if (!number) {
      next(createError(400, "All fields are requored!"));
    }

    // initial auth value
    let mobileData = null;

    if (isMobile(number)) {
      mobileData = number;
      const mobileCheck = await User.findOne({ mobile: number });
      if (mobileCheck) {
        return next(createError(400, "Mobile already axists!"));
      }
    } else {
      return next(createError(400, "Invalid Mobile or Email"));
    }

    // verify activation code
    let activationcode = getRandom(100000, 999999);

    // check activation code
    const checkCode = await User.findByIdAndUpdate({
      access_token: activationcode,
    });

    // check code
    if (checkCode) {
      activationcode = getRandom(100000, 999999);
    }
    const user = await User.findOne().and([
      { mobile: number },
      { isActivate: false },
    ]);

    if (user) {
      if (mobileData) {
        sendOTP(
          user.mobile,
          `Hi ${user.first_name} ${user.sur_name}, Your account activation OTP is ${activationcode})`
        );

        // send respone
        const token = createToken({ id: user._id }, "365d");
        res
          .status(200)
          .cookie.remove("otp")
          .cookie("otpn", user.mobile, {
            expires: new Date(Date.now() + 1000 * 60 * 15),
          })
          .cookie("authToken", token)
          .json({
            message: "User Created Successful",
            user: user,
          });
      }
    }
  } catch (error) {
    next(error);
  }
};
/**
 * resend Activation
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
export const resendActivation = async (req, res, next) => {
  const { auth } = req.body;

  // initial auth value
  let mobileData = null;
  let emailData = null;
  let emailCheck;
  let mobileCheck;

  if (isEmail(auth)) {
    emailData = auth;
    emailCheck = await User.findOne({ email: auth }).and([
      {
        isActivate: false,
      },
    ]);
    if (!emailCheck) {
      return next(createError(400, "Email User Account not found"));
    }

    if (emailCheck.isActivate) {
      return next(createError(400, "Email User Account already activate"));
    }
  } else if (isMobile(auth)) {
    mobileData = auth;
    mobileCheck = await User.findOne({ mobile: auth }).and([
      {
        isActivate: false,
      },
    ]);
    if (!mobileCheck) {
      return next(createError(400, "Mobile user Account not found"));
    }
    if (mobileCheck.isActivate) {
      return next(createError(400, "Mobile User Account already activate"));
    }
  } else {
    return next(createError(400, "Invalid Mobile or Email"));
  }

  try {
    // verify activation code
    let activationcode = getRandom(100000, 999999);

    // check activation code
    const checkCode = await User.findOne({ access_token: activationcode });

    // check code
    if (checkCode) {
      activationcode = getRandom(100000, 999999);
    }

    if (mobileData) {
      // create activation OTP

      sendOTP(
        mobileCheck.mobile,
        `Hi ${mobileCheck.first_name} ${mobileCheck.sur_name}, Your account activation OTP is ${activationcode})`
      );

      // resend a code
      await User.findByIdAndUpdate(mobileCheck._id, {
        access_token: activationcode,
      });

      // send respone
      res
        .status(200)
        .cookie("otp", mobileCheck.mobile, {
          expires: new Date(Date.now() + 1000 * 60 * 15),
        })
        .json({
          message: "New OTP send Successful",
        });
    }

    // if not user
    if (emailData) {
      // create activation token
      const activationToken = createToken({ id: emailCheck._id }, "30d");

      sendActivationLink(emailCheck.email, {
        name: emailCheck.first_name + " " + emailCheck.sur_name,
        link: `${
          process.env.APP_URL + ":" + process.env.SERVER_PORT
        }/api/v1/user/activate/${activationToken}`,
        code: activationcode,
      });

      // resend a code
      await User.findByIdAndUpdate(emailCheck._id, {
        access_token: activationcode,
      });

      // send respone
      res
        .status(200)
        .cookie("otp", emailCheck.email, {
          expires: new Date(Date.now() + 1000 * 60 * 15),
        })
        .json({
          message: "Activation link send",
        });
    }
  } catch (error) {
    next(error);
  }
};
/**
 * @access public
 * @route /api/user/account activate by forgot Password
 * @method Post
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      next(createError(400, "User not found"));
    } else {
      // create activation token
      const loginAsAccountToken = createToken({ id: user._id }, "30d");

      // create activation token
      const passwordResetToken = createToken({ id: user._id }, "30d");

      sentForgotPasswordLink(user.email, {
        name: user.username,
        email: user.email,
        loginAsAccountLink: `${
          process.env.APP_URL + ":" + process.env.SERVER_PORT
        }/api/v1/user/loginAsAccount/${loginAsAccountToken}`,
        resetPassowrdLink: `${
          process.env.APP_URL + ":" + process.env.SERVER_PORT
        }/api/v1/user/forgot-password/${passwordResetToken}`,
      });

      // send respone
      res.status(200).json({
        message: "A password reset link has send to your password",
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/user/ Password reset action
 * @method Get
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const loginAsAccount = async (req, res, next) => {
  try {
    // get token
    const { token } = req.params;

    // check token
    if (!token) {
      next(createError(400, "Invalid activation token"));
    } else {
      // verify token
      const tokenData = tokenVerify(token);

      // check verify token
      if (!tokenData) {
        next(createError(400, "Invalid verify token"));
      }

      // now activate account
      if (tokenData) {
        const user = await User.findById(tokenData.id);

        if (!user) {
          next(createError(400, "Invalid User Id"));
        } else {
          const token = createToken({ id: user._id }, "365d");

          res.status(200).json({
            message: "Login As Account Successful",
            user: user,
            token: token,
          });
        }
      }
    }
  } catch (error) {
    next(error);
  }
};
/**
 * @access public
 * @route /api/user/ Password reset action
 * @method Get
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const passwordResetAction = async (req, res, next) => {
  try {
    // get token
    const { token } = req.params;
    const { password } = req.body;

    // check token
    if (!token) {
      next(createError(400, "Invalid activation token"));
    } else {
      // verify token
      const tokenData = tokenVerify(token);

      // check verify token
      if (!tokenData) {
        next(createError(400, "Invalid verify token"));
      }

      // now activate account
      if (tokenData) {
        const user = await User.findById(tokenData.id);

        if (!user) {
          next(createError(400, "Invalid User Id"));
        } else {
          await User.findByIdAndUpdate(user._id, {
            password: hashPassword(password),
            access_token: "",
          });

          res.status(200).json({
            message: "Password Changed",
          });
        }
      }
    }
  } catch (error) {
    next(error);
  }
};
