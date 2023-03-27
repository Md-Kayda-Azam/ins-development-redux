import { createBrowserRouter } from "react-router-dom";
import ChangePassword from "../components/ChangePassword/ChangePassword";
import Footer from "../components/Footer/Footer";
import PasswordReset from "../components/PasswordReset/PasswordReset";
import UserHome from "../components/UserHome/UserHome";
import Activation from "../features/Activation/Activation";
import Home from "../features/Home/Home";
import Login from "../features/Login/Login";
import Profile from "../features/Profile/Profile";
import Signup from "../features/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <UserHome />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/activation/account",
    element: <Activation />,
  },
  {
    path: "/account-password-reset",
    element: <PasswordReset />,
  },
  {
    path: "/account-password-change",
    element: <ChangePassword />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },
]);
