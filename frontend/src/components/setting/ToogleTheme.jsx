import { useTheme } from "../context/ThemeContext";

const solidThemes = {
  "solid-1": { label: "cherry blossom pink", bg: "bg-cherry-blossom-pink" },
  "solid-2": { label: "apicot", bg: "bg-apricot" },
  "solid-3": { label: "lomon chiffon", bg: "bg-lemon-chiffon" },  
  "solid-4": { label: "tea green", bg: "bg-tea-green" },
  "solid-5": { label: "light blue", bg: "bg-light-blue" },
  "solid-6": { label: "thistle", bg: "bg-thistle" },
  "solid-7": { label: "bright pink", bg: "bg-bright-pink" },
  "solid-8": { label: "xanthous", bg: "bg-xanthous" },
  "solid-9": { label: "jasmine", bg: "bg-jasmine" },
  "solid-10": { label: "light green", bg: "bg-light-green" },
  "solid-11": { label: "maya blue", bg: "bg-maya-blue" },
  "solid-12": { label: "lavender", bg: "bg-lavender" },
};

const gradientThemes = {
  "gradient-1": { label: "Cyber Inferno", colors: ["from-pink-200", "via-purple-200", "to-blue-200"] },
  "gradient-5": { label: "Midnight Aurora", colors: ["from-slate-900", "via-cyan-300", "to-violet-900"] },
  "gradient-6": { label: "Nebula Pulse", colors: ["from-purple-900", "via-fuchsia-300", "to-blue-900"] },
  "gradient-7": { label: "Cyber Prism", colors: ["from-gray-950", "via-indigo-400", "to-gray-950"] },
  "gradient-9": { label: "Velvet Night", colors: ["from-gray-100", "via-purple-800", "to-indigo-500"] },
  "gradient-10": { label: "Inferno", colors: ["from-black", "via-gray-800", "to-red-600"] },
}

const ToogleTheme = () => {
  const { theme, setTheme } = useTheme();

  const renderSolidThemes = () => (
    <div className="flex flex-wrap gap-4">
      {Object.entries(solidThemes).map(([id, { label, bg }]) => (
        <div
          key={id}
          onClick={() => setTheme(id)}
          className={`w-16 h-16 rounded-full cursor-pointer transition-all duration-300 ${bg} ${theme === id ? "scale-110" : ""}`}
          title={label}
        />
      ))}
    </div>
  );

  const renderGradientThemes = () => (
    <div className="flex flex-wrap gap-4">
      {Object.entries(gradientThemes).map(([id, { label, colors }]) => (
        <div
          key={id}
          onClick={() => setTheme(id)}
          className={`w-16 h-16 rounded-full cursor-pointer transition-all duration-300 bg-gradient-to-br ${colors.join(" ")} ${theme === id ? "scale-110" : ""}`}
          title={label}
        />
      ))}
    </div>
  );

  return (
    <div className="flex flex-col gap-6 border-2 border-white/20 p-10 m-6 rounded-3xl bg-black/30">
      <div className="text-white font-bold text-2xl">Choose Theme</div>

      <div className="flex flex-col gap-4">
        <div className="text-white text-lg font-semibold">Gradient Themes</div>
        {renderGradientThemes()}
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-white text-lg font-semibold">Solid Colors</div>
        {renderSolidThemes()}
      </div>
    </div>
  );
};

export default ToogleTheme;
