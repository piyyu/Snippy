import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getInitialColors = () => {
    const stored = localStorage.getItem("colors");
    return stored ? stored.split(",") : ["blue-400", "purple-400", "pink-400"];
  };

  const [colors, setColors] = useState(getInitialColors);

  useEffect(() => {
    localStorage.setItem("colors", colors.join());
  }, [colors]);

  return (
    <ThemeContext.Provider value={{ colors, setColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
