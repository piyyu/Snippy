import { useTheme } from "../context/ThemeContext";

const AnimatedBg = ({ children }) => {
  const { colors } = useTheme();
  const [from, via, to] = colors;
  const gradientClass = `from-${from} via-${via} to-${to}`;

  return (
    <div
      className={`relative min-h-screen min-w-screen bg-gradient-to-r ${gradientClass} bg-[length:300%_300%] bg-[position:0%_50%] animate-gradient overflow-hidden`}
    >
      {children}
    </div>
  );
};

export default AnimatedBg;
