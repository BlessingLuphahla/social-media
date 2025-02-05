import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Home from "./assets/pages/home/Home";
import Register from "./assets/pages/register/Register";
import Profile from "./assets/pages/profile/Profile";
import Login from "./assets/pages/login/Login";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        {/* If user is logged in, show Home, otherwise show Register */}
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />

        {/* If user is logged in, redirect to Home, otherwise show Login */}
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

        {/* If user is logged in, redirect to Home, otherwise show Register */}
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />

        {/* Profile page (only accessible if logged in) */}
        <Route path="/profile/:username" element={user ? <Profile /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
