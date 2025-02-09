import axios from "axios";
import { LoginStart, LoginSuccess, LoginFailure } from "./context/AuthActions";

export const LoginCall = async (userCredentials, dispatch) => {
  dispatch(LoginStart(userCredentials));
  try {
    const res = await axios.post(
      import.meta.env.VITE_SERVER_URL+"/api/auth/login",
      userCredentials
    );
    dispatch(LoginSuccess(res.data));
  } catch (err) {
    dispatch(LoginFailure(err));
  }
};