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
import ProfileChangePasssword from "./components/ProfileChangePasssword/ProfileChangePasssword";
import EmailSend from "./components/EmailSend/EmailSend";
import ForgotPasswordCode from "./components/ForgotPasswordCode/ForgotPasswordCode";
import LoadingBar from "react-top-loading-bar";
import { useDispatch, useSelector } from "react-redux";
import { LOADER_END } from "./redux/TopLoadingBar/loaderType";
import AuthReject from "./privateRoute/AuthReject";
import { useEffect } from "react";
import { tokenUser } from "./redux/auth/authAction";
import AuthRedirect from "./privateRoute/AuthRedirect";
import DataNotFound from "./components/DataNotFound/DataNotFound";
import Cookies from "js-cookie";
import EditProfile from "./components/EditProfile/EditProfile";
import AppAndWebSite from "./components/EditProfile/EditProfileComponents/AppAndWebSite/AppAndWebSite";
import EditProfileC from "./components/EditProfile/EditProfileComponents/EditProfile/EditProfile";
import EmailNotifications from "./components/EditProfile/EditProfileComponents/EmailNotifications/EmailNotifications";
import PushNotifications from "./components/EditProfile/EditProfileComponents/PushNotifications/PushNotifications";
import WhatYouSee from "./components/EditProfile/EditProfileComponents/WhatYouSee/WhatYouSee";
import SeeYourContent from "./components/EditProfile/EditProfileComponents/SeeYourContent/SeeYourContent";
import HowInteractYou from "./components/EditProfile/EditProfileComponents/HowInteractYou/HowInteractYou";
import YourDataDownload from "./components/EditProfile/EditProfileComponents/YourDataDownload/YourDataDownload";
import FamilyCenter from "./components/EditProfile/EditProfileComponents/FamilyCenter/FamilyCenter";
import Help from "./components/EditProfile/EditProfileComponents/Help/Help";
import AccountCenterProfile from "./components/AccountCenterProfile/AccountCenterProfile";
import Accounts from "./components/AccountCenterProfile/Components/Accounts/Accounts";
import Profiles from "./components/AccountCenterProfile/Components/Profiles/Profiles";
import PersonalDetails from "./components/AccountCenterProfile/Components/PersonalDetails/PersonalDetails";
import PasswordSecurity from "./components/AccountCenterProfile/Components/PasswordSecurity/PasswordSecurity";
import YouInAPer from "./components/AccountCenterProfile/Components/YouInAPer/YouInAPer";
import AdPreferences from "./components/AccountCenterProfile/Components/AdPreferences/AdPreferences";
import AdsPayments from "./components/AccountCenterProfile/Components/AdsPayments/AdsPayments";
import ConnExpre from "./components/AccountCenterProfile/Components/ConnExpre/ConnExpre";

function App() {
  const loader = useSelector((state) => state.loader);
  const loaderDispatch = useDispatch();
  const tokenDispatch = useDispatch();
  const token = Cookies.get("authToken");
  const { loginState } = useSelector((state) => state.ins_auth);

  useEffect(() => {
    if (token) {
      tokenDispatch(tokenUser(token));
    }
  }, [tokenDispatch]);

  return (
    <>
      <LoadingBar
        color="red"
        progress={loader}
        onLoaderFinished={() => loaderDispatch({ type: LOADER_END })}
      />
      <Routes>
        <Route path="/" element={loginState ? <Home /> : <Login />}>
          <Route path="/" element={loginState ? <UserHome /> : <Login />} />
          <Route
            path="profile"
            element={loginState ? <Profile /> : <Login />}
          />
          <Route
            path="accounts/edit"
            element={loginState ? <EditProfile /> : <Login />}
          >
            <Route index element={<EditProfileC />} />
            <Route path="accounts/manage_access" element={<AppAndWebSite />} />
            <Route path="emails/settings" element={<EmailNotifications />} />
            <Route path="push/web/settings" element={<PushNotifications />} />
            <Route path="accounts/what_you_see" element={<WhatYouSee />} />
            <Route
              path="accounts/who_can_see_your_content"
              element={<SeeYourContent />}
            />
            <Route
              path="accounts/how_others_can_interact_with_you"
              element={<HowInteractYou />}
            />
            <Route path="family/dashboard" element={<FamilyCenter />} />

            <Route
              path="accounts/your_data_and_media"
              element={<YourDataDownload />}
            />
            <Route path="settings/help" element={<Help />} />
          </Route>
        </Route>
        <Route
          path="account/recovery/:token"
          element={loginState ? <ProfileChangePasssword /> : <Login />}
        />
        <Route
          path="accountcenter/profiles"
          element={loginState ? <AccountCenterProfile /> : <Login />}
        >
          <Route index element={<Profiles />} />
          <Route path="connected_experiences" element={<ConnExpre />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="personal_info" element={<PersonalDetails />} />
          <Route path="password_and_security" element={<PasswordSecurity />} />
          <Route path="info_and_permissions" element={<YouInAPer />} />
          <Route path="ad_preferences" element={<AdPreferences />} />
          <Route path="payments" element={<AdsPayments />} />
        </Route>
        <Route
          path="/signup"
          element={
            <AuthRedirect>
              <Signup />
            </AuthRedirect>
          }
        />
        <Route
          path="/login"
          element={
            <AuthRedirect>
              <Login />
            </AuthRedirect>
          }
        />
        <Route path="/activation/account" element={<Activation />} />
        <Route path="/account-password-reset" element={<PasswordReset />} />
        <Route
          path="/account-password-change/:token"
          element={<ChangePassword />}
        />
        <Route path="/email-send" element={<EmailSend />} />
        <Route
          path="/forgot-password-activation"
          element={<ForgotPasswordCode />}
        />
        <Route path="*" element={<DataNotFound />} />
      </Routes>
    </>
  );
}

export default App;
