export const LoginStart = () => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

export const Logout = (user) => ({
  type: "LOGOUT",
  payload: user,
});

// eslint-disable-next-line react-refresh/only-export-components
export const updateUser = (user) => ({
  type: "UPDATE_USER",
  payload: user,
});
