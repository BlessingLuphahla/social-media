import axios from "axios";
import { LoginStart, LoginSuccess, LoginFailure } from "./AuthActions";

export const LoginCall = async (userCredentials, dispatch) => {
  dispatch(LoginStart(userCredentials));
  try {
    const res = await axios.post(
      "https://social-media-rest-api-xpqj.onrender.com/api/auth/login",
      userCredentials
    );
    dispatch(LoginSuccess(res.data));
  } catch (err) {
    dispatch(LoginFailure(err));
  }
};