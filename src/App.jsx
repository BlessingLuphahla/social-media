import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense, useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const Home = lazy(() => import("./assets/pages/home/Home"));
const Register = lazy(() => import("./assets/pages/register/Register"));
const Profile = lazy(() => import("./assets/pages/profile/Profile"));
const Login = lazy(() => import("./assets/pages/login/Login"));
const Messenger = lazy(() => import("./components/messenger/Messenger"));
const Settings = lazy(() => import("./components/settings/Settings"));

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />

          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />

          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />

          <Route
            path="/messenger"
            element={user ? <Messenger /> : <Navigate to="/login" />}
          />

          <Route
            path="/profile/:username"
            element={user ? <Profile /> : <Navigate to="/login" />}
          />
          <Route path="/settings" element={user && <Settings />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
