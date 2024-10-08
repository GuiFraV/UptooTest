import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect } from "react";

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex flex-col w-44">
      <p className="text-[#aeb9cf] text-[14px] mb-2 font-robot tracking-wide">
        THÈME
      </p>
      <div
        className="relative flex items-center bg-gray-800 rounded-full w-full h-7 cursor-pointer"
        onClick={toggleTheme}
      >
        {/* Background Toggle */}
        <div
          className={`absolute z-0 bg-gray-600 rounded-full transition-all duration-300 ${
            isDarkMode ? "left-[calc(50%+2px)]" : "left-[2px]"
          }`}
          style={{
            width: "calc(50% - 4px)",
            height: "calc(100% - 6px)",
          }}
        ></div>

        {/* Light Mode */}
        <div
          className={`flex items-center justify-center w-1/2 space-x-1.5 z-10 px-2 ${
            !isDarkMode ? "text-white" : "text-gray-400"
          }`}
        >
          <FiSun className="w-4 h-4" />
          <span className="text-sm">Light</span>
        </div>

        {/* Dark Mode */}
        <div
          className={`flex items-center justify-center w-1/2 space-x-1.5 z-10 px-2 ${
            isDarkMode ? "text-white" : "text-gray-400"
          }`}
        >
          <FiMoon className="w-4 h-4" />
          <span className="text-sm">Dark</span>
        </div>
      </div>
    </div>
  );
}
