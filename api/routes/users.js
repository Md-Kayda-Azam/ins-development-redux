import express from "express";
import {
  activateAccountByCode,
  forgotPassword,
  loggedInUser,
  login,
  loginAsAccount,
  passwordResetAction,
  signupIns,
  activateAccountByChangeNumberCode,
  resendActivation,
} from "../controllers/userController.js";

/// init routers
const router = express.Router();

// user auth router
router.post("/login", login);
router.post("/signup", signupIns);
router.get("/me", loggedInUser);
router.post("/code-activate/", activateAccountByCode);
router.post("/change-number/", activateAccountByChangeNumberCode);
router.post("/resend-activate/", resendActivation);
router.post("/forgot-password/", forgotPassword);
router.get("/loginAsAccount/:token", loginAsAccount);
router.post("/forgot-password/:token", passwordResetAction);

// export default router
export default router;
