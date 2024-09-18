import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";
import { useTheme } from "@/contexts/ThemeContext";

export default function Home() {
  const { isDarkMode } = useTheme();
  return (
    <div className="flex bg-[#28292e] ">
      <Sidebar />
      <div
        className={`flex-1 rounded-tl-[40px] bg-[#28292e] ${
          isDarkMode ? "bg-dark-background" : "bg-[#f6f7f9] "
        }`}
      >
        <Dashboard />
      </div>
    </div>
  );
}
