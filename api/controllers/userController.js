import { getRandom } from "../utility/math.js";
import User from "../models/User.js";
import createError from "../utility/createError.js";
import { hashPassword, varifyPassword } from "../utility/hash.js";
import {
  sendActivationLink,
  sentForgotPasswordLink,
} from "../utility/sendMail.js";
import { createToken, tokenVerify } from "../utility/token.js";
import { isEmail, isMobile, isUsername } from "../utility/validate.js";
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
 * Sign up check Adress
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const signupCheckAddress = async (req, res, next) => {
  try {
    const { auth } = req.body;

    if (isEmail(auth)) {
      const data = await User.findOne({ email: auth });
      if (data) {
        res.status(200).json({
          message: "Already user email active!",
          email: auth,
        });
      }
    } else if (isMobile(auth)) {
      const data = await User.findOne({ mobile: auth });
      if (data) {
        res.status(200).json({
          message: "Already user mobile active!",
          email: auth,
        });
      }
    } else {
      res.status(200).json({
        message: "Invalid",
      });
    }
  } catch (error) {
    next(error);
  }
};
/**
 * Sign up check username
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const signupCheckUsername = async (req, res, next) => {
  try {
    const { auth } = req.body;
    if (isUsername(auth)) {
      const data = await User.findOne({ username: auth });
      if (data) {
        res.status(200).json({
          message: "Already username active!",
        });
      }
    } else {
      res.status(200).json({
        message: "Invalid",
      });
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
    const { auth, password } = req.body;

    //     User email axists validate
    if (isEmail(auth)) {
      const loginUser = await User.findOne({ email: auth });
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
      // next(createError(400, "Invalid email address"));
    } else if (isMobile(auth)) {
      const loginUser = await User.findOne({ mobile: auth });

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
      // next(createError(400, "Invalid mobile number"));
    } else if (isUsername(auth)) {
      const loginUser = await User.findOne({ username: auth });

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
      // next(createError(400, "Invalid mobile number"));
    } else {
      next(createError(400, "Invalid Email, Mobile or Username"));
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
      return next(createError(400, "Token not found"));
    } else {
      const token = auth_token.split(" ")[1];
      const user = tokenVerify(token);

      if (!user) {
        return next(createError(400, "Invalid Token"));
      } else {
        const loggedInUser = await User.findById(user.id);

        if (!loggedInUser) {
          return next(createError(400, "User data not found"));
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
 * @access public
 * @route /api/user/account activate by Code
 * @method Post
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const activateAccountByCodeForgotPassword = async (req, res, next) => {
  try {
    const { code } = req.body;

    const user = await User.findOne().and([
      { access_token: code },
      { isActivate: true },
    ]);
    if (!user) {
      next(createError(400, "Activation user not found"));
    } else {
      await User.findByIdAndUpdate(user.id, {
        access_token: "",
      });
      // send respone
      const token = createToken({ id: user._id }, "365d");
      res.status(200).json({
        message: "User account activation successful",
        token: token,
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
    const { token } = req.body;

    const { token: tokenN, changeNumberinput: number } = token;

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
    // check token
    if (!tokenN) {
      next(createError(400, "Invalid activation token"));
    } else {
      // verify token
      const tokenData = tokenVerify(tokenN);

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
          // verify activation code
          let activationcode = getRandom(100000, 995999);

          const updated_user = await User.findByIdAndUpdate(user._id, {
            access_token: activationcode,
            mobile: number,
          });
          if (user) {
            if (mobileData) {
              sendOTP(
                updated_user.mobile,
                `Hi ${updated_user.full_name} ${updated_user.username}, Your account activation OTP is ${activationcode})`
              );

              // send respone
              const token = createToken({ id: updated_user._id }, "365d");
              res
                .status(200)
                .cookie("otp", number, {
                  expires: new Date(Date.now() + 1000 * 60 * 15),
                })
                .cookie("authToken", token)
                .json({
                  message: "User Created Successful",
                  user: updated_user,
                });
            }
          }
        }
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
 * resend Activation
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
export const resendForgotPassword = async (req, res, next) => {
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
        isActivate: true,
      },
    ]);
    if (!emailCheck) {
      return next(createError(400, "Email User Account not Activate"));
    }
  } else if (isMobile(auth)) {
    mobileData = auth;
    mobileCheck = await User.findOne({ mobile: auth }).and([
      {
        isActivate: true,
      },
    ]);
    if (!mobileCheck) {
      return next(createError(400, "Mobile user Account not Activate"));
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
    const { auth } = req.body;

    if (isEmail(auth)) {
      const data = await User.findOne({ email: auth });

      if (!data) {
        next(createError(400, "User not found"));
      } else {
        // create activation token
        const loginAsAccountToken = createToken({ id: data._id }, "30d");

        // create activation token
        const passwordResetToken = createToken({ id: data._id }, "30d");

        sentForgotPasswordLink(data.email, {
          name: data.username,
          email: data.email,
          loginAsAccountLink: `${
            process.env.APP_URL + ":" + process.env.SERVER_PORT_PASSWORD
          }/account/recovery/${loginAsAccountToken}`,
          resetPassowrdLink: `${
            process.env.APP_URL + ":" + process.env.SERVER_PORT_PASSWORD
          }/account-password-change/${passwordResetToken}`,
        });
        // send respone
        const token = createToken({ id: data._id }, "365d");
        // send respone
        res.status(200).json({
          message: "A password reset link has send to your password",
          email: data.email,
        });
      }
    } else if (isMobile(auth)) {
      const data = await User.findOne({ mobile: auth });

      if (!data) {
        next(createError(400, "User not found"));
      } else {
        // verify activation code
        let activationcode = getRandom(100000, 995999);

        const updated_user = await User.findByIdAndUpdate(data._id, {
          access_token: activationcode,
        });

        sendOTP(
          updated_user.mobile,
          `Hi ${updated_user.full_name} ${updated_user.username}, Your account activation OTP is ${activationcode})`
        );

        // send respone
        const token = createToken({ id: data._id }, "365d");
        res
          .status(200)
          .cookie("otp", updated_user.mobile, {
            expires: new Date(Date.now() + 1000 * 60 * 15),
          })
          .json({
            message: "Forgot password",
            user: data,
            mobile: updated_user.mobile,
          });
      }
    } else if (isUsername(auth)) {
      const data = await User.findOne({ username: auth });

      // const data = datau.email;
      if (data.email) {
        //  create activation token
        const loginAsAccountToken = createToken({ id: data._id }, "30d");
        // create activation token
        const passwordResetToken = createToken({ id: data._id }, "30d");
        sentForgotPasswordLink(data.email, {
          name: data.username,
          email: data.email,
          loginAsAccountLink: `${
            process.env.APP_URL + ":" + process.env.SERVER_PORT_PASSWORD
          }/account/recovery/${loginAsAccountToken}`,
          resetPassowrdLink: `${
            process.env.APP_URL + ":" + process.env.SERVER_PORT_PASSWORD
          }/account-password-change/${passwordResetToken}`,
        });

        // send respone
        res.status(200).json({
          message: "A password reset link has send to your password",
          email: data.email,
        });
      } else if (data.mobile) {
        //    verify activation code
        let activationcode = getRandom(100000, 995999);
        const updated_user = await User.findByIdAndUpdate(data._id, {
          access_token: activationcode,
        });
        sendOTP(
          updated_user.mobile,
          `Hi ${updated_user.full_name} ${updated_user.username}, Your account activation OTP is ${activationcode})`
        );

        res
          .status(200)
          .cookie("otp", updated_user.mobile, {
            expires: new Date(Date.now() + 1000 * 60 * 15),
          })
          .json({
            message: "Forgot password",
            user: data,
            mobile: data.mobile,
          });
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
    const { newPassword } = req.body;

    // check token
    if (!token) {
      next(createError(400, "Invalid activation token"));
    } else {
      // verify token
      const tokenData = tokenVerify(token);

      // check verify token
      if (!tokenData) {
        next(createError(400, "Invalid verify token"));
      } else {
        const user = await User.findById(tokenData.id);

        if (!user) {
          next(createError(400, "Invalid User Id"));
        } else {
          await User.findByIdAndUpdate(user._id, {
            password: hashPassword(newPassword),
          });
          // send respone
          const token = createToken({ id: user._id }, "1d");

          res.status(200).cookie("authToken", token).json({
            message: "Password Changed",
            user: user,
          });
        }
      }
    }
  } catch (error) {
    next(error);
  }
};
