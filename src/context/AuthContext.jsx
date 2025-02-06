/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "679e4e6193e9f62abca45056",
    username: "reddaxe",
    email: "df@gmail",
    profilePic: "1.jpg",
    coverPic: "2.jpg",
    followers: ["679e5e5ae78f7661ff3c0806"],
    isAdmin: false,
    posts: [],
    savedPosts: [],
    comments: [],
    likes: [1, 2, 3, 4],
    date: "2025-02-01T16:40:01.610Z",
    createdAt: "2025-02-01T16:40:01.681Z",
    __v: 0,
    desc: "ddnt work last time bro",
    followings: ["679e5e5ae78f7661ff3c0806", "67a243536fb3b8080740356e"],
    city: "Bulawayo",
    from: "Magwegwe Something",
    relationship: "single AF",
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

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
