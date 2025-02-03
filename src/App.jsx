import Home from "./assets/pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./assets/pages/register/Register";
import Profile from "./assets/pages/profile/Profile";
import Login from "./assets/pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profile/:username" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
