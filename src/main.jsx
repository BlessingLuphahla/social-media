import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContext";
import { ScreenProvider } from "./context/ScreenContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ScreenProvider>
      <App />
    </ScreenProvider>
  </AuthContextProvider>
);
