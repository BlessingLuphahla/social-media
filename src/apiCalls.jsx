import axios from "axios";
import { LoginStart, LoginSuccess, LoginFailure } from "./context/AuthActions";

export const LoginCall = async (userCredentials, dispatch) => {
  dispatch(LoginStart(userCredentials));

  const controller = new AbortController();

  try {
    const res = await axios.post(
      import.meta.env.VITE_SERVER_URL + "/api/auth/login",
      userCredentials,
      {
        signal: controller.signal,
      }
    );
    dispatch(LoginSuccess(res.data));
  } catch (err) {
    if (err.name === "CanceledError") console.log("Request has been cancelled");
    else console.log(err);
    dispatch(LoginFailure(err));
  }
};
