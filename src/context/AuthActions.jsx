/* eslint-disable no-unused-vars */
export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
  payload: userCredentials,
});


export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});
