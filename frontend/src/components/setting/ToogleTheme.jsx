import { useTheme } from "../context/ThemeContext";

const gradientThemes = {
  Theme1: ["blue-400", "purple-400", "pink-400"],
  Theme2: ["gray-100", "gray-400", "gray-800"],
  Theme3: ["lime-300", "green-400", "emerald-500"],
  Theme4: ["indigo-400", "sky-400", "cyan-300"],
  Theme5: ["amber-300", "rose-400", "fuchsia-500"],
  Theme6: ["yellow-300", "lime-400", "green-400"],
  Theme7: ["rose-500", "pink-500", "orange-400"], 
  Theme9: ["purple-400", "pink-400", "red-400"],
  Theme10: ["fuchsia-500", "purple-500", "blue-500"],
};

const ToogleTheme = () => {
  const { setColors, colors } = useTheme();

  return (
    <div className="flex h-fit flex-col gap-4 border-2 border-white/20 p-4 rounded-3xl">
      <div className="font-semibold text-white text-xl p-2">
        Available Themes
      </div>

      {/* Preload Tailwind classes to avoid purging */}
      <div className="hidden">
        <div className="from-blue-500 via-indigo-500 to-purple-500" />
        <div className="from-gray-200 via-gray-500 to-gray-800" />
        <div className="from-lime-300 via-green-400 to-emerald-500" />
        <div className="from-indigo-400 via-sky-400 to-cyan-300" />
        <div className="from-amber-300 via-rose-400 to-fuchsia-500" />
        <div className="from-yellow-300 via-lime-400 to-green-400" />
        <div className="from-rose-500 via-pink-500 to-orange-400" />
        <div className="from-cyan-400 via-teal-500 to-emerald-500" />
        <div className="from-purple-400 via-pink-400 to-red-400" />
        <div className="from-fuchsia-500 via-purple-500 to-blue-500" />
      </div>
    
      {Object.entries(gradientThemes).map(([label, value]) => {
        const [from, via, to] = value;
        const gradientClass = `from-${from} via-${via} to-${to}`;
        const isActive = value.join() === colors.join();

        return (
          <div
            key={label}
            onClick={() => setColors(value)}
            className={`flex items-center gap-2 cursor-pointer border-2
              ${isActive ? "border-white animate-gradient" : "border-white/20"}
              bg-gradient-to-r ${gradientClass}
              bg-[length:300%_300%] bg-[position:0%_50%]
              p-3 sm:p-4 rounded-3xl transition-all duration-100`}
          >
            <span className="text-white">{label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ToogleTheme;
