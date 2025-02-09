import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Home from "./assets/pages/home/Home";
import Register from "./assets/pages/register/Register";
import Profile from "./assets/pages/profile/Profile";
import Login from "./assets/pages/login/Login";
import Messenger from "./components/messenger/Messenger";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />

        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />

        <Route path="/messenger" element={user ? <Messenger /> : <Navigate to="/login" />} />

        <Route path="/profile/:username" element={user ? <Profile /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
