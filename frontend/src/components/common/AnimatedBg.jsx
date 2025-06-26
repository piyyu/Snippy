import { useTheme } from "../context/ThemeContext";

const solidThemes = {
  "solid-1": "bg-cherry-blossom-pink",
  "solid-2": "bg-apricot",
  "solid-3": "bg-lemon-chiffon",
  "solid-4": "bg-tea-green",
  "solid-5": "bg-light-blue",
  "solid-6": "bg-thistle",
  "solid-7": "bg-bright-pink",
  "solid-8": "bg-xanthous",
  "solid-9": "bg-jasmine",
  "solid-10": "bg-light-green",
  "solid-11": "bg-maya-blue",
  "solid-12": "bg-lavender",
};

const gradientThemes = {
  "gradient-1": ["from-pink-200", "via-purple-200", "to-blue-200"],
  "gradient-2": ["from-pink-200", "via-purple-400", "to-blue-900"],
  "gradient-3": ["from-pink-300", "via-rose-300", "to-amber-300"],
  "gradient-4": ["from-cyan-400", "via-indigo-600", "to-purple-800"],
  "gradient-5": ["from-slate-900", "via-cyan-300", "to-violet-900"],
  "gradient-6": ["from-purple-900", "via-fuchsia-300", "to-blue-900"],
  "gradient-7": ["from-gray-950", "via-indigo-400", "to-gray-950"],
  "gradient-8": ["from-indigo-900", "via-indigo-300", "to-indigo-900"],
  "gradient-9": ["from-gray-100", "via-purple-800", "to-indigo-500"],
  "gradient-10": ["from-black", "via-gray-800", "to-red-600"],
}

const AnimatedBg = ({ children }) => {
  const { theme } = useTheme();

  let bgClass = "bg-black";

  if (theme.startsWith("solid-") && solidThemes[theme]) {
    bgClass = solidThemes[theme];
  } else if (theme.startsWith("gradient-") && gradientThemes[theme]) {
    bgClass = `bg-gradient-to-br ${gradientThemes[theme].join(" ")}`;
  }

  return (
    <div className={`min-h-screen max-h-full transition-all duration-500 ${bgClass}`}>
      {children}
    </div>
  );
};

export default AnimatedBg;
