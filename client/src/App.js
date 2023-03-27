import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./features/Home/Home";
import Signup from "./features/Signup/Signup";
import Login from "./features/Login/Login";
import Activation from "./features/Activation/Activation";
import UserHome from "./components/UserHome/UserHome";
import Profile from "./features/Profile/Profile";
import PasswordReset from "./components/PasswordReset/PasswordReset";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<UserHome />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/activation/account" element={<Activation />} />
        <Route path="/account-password-reset" element={<PasswordReset />} />
        <Route path="/account-password-change" element={<ChangePassword />} />
      </Routes>
    </>
  );
}

export default App;
