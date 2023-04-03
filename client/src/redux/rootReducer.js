import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import toastReducer from "./toast/toastReducer";
import loaderReducer from "./TopLoadingBar/loaderReducer";

// create root reducer
export const rootReducer = combineReducers({
  ins_auth: authReducer,
  loader: loaderReducer,
  toast: toastReducer,
  chat: "",
});
