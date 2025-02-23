/* eslint-disable react/prop-types */
import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  // 🔹 Sync `user` state with localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Updating localStorage with user:", state.user); // Debugging
      if (state.user) {
        localStorage.setItem("user", JSON.stringify(state.user));
      } else {
        localStorage.removeItem("user"); // Clear storage when logged out
      }
    }
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
