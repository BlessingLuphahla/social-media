/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

const ScreenContext = createContext();

export const ScreenProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScreenContext.Provider value={{ isMobile }}>
      {children}
    </ScreenContext.Provider>
  );
};

export const useScreen = () => useContext(ScreenContext);
